import Autosuggest from 'react-autosuggest';
import Axios from 'axios';
import React from 'react';


class SearchBar extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      categories: [],
      rawproductData: [],
      navBarData: []
    };
  }

  componentDidMount() {
    //Get category data and raw product data from Mongo and transfom into navBarData array we can use
    Axios.get('/products/categories')
    .then((result)=>{
      const categoriesArray = result.data;
      this.setState({
        categories: categoriesArray
      });
      return Axios.get('/products/navBarData')
    }).then((result) => {
      const productData = result.data;
      this.setState({
        rawproductData: productData
      });
    }).then(() => {
      let navBarData = []
      for (let i=0; i < this.state.categories.length; i++) {
        let categoryObject = {};
        let category = this.state.categories[i]
        categoryObject.title = category
        categoryObject.suggestions = [];
        for (let j=0; j < this.state.rawproductData.length; j++) {
          if (this.state.rawproductData[j].category === category) {
            let productObj = {
              text: this.state.rawproductData[j].productTitle,
              asin: this.state.rawproductData[j].asin
            };
            categoryObject.suggestions.push(productObj);
          }
        }
        navBarData.push(categoryObject);
      }
      this.setState({
        navBarData: navBarData
      })
      console.log(this.state.navBarData)
    })
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions (value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.navBarData.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  // Use your imagination to render suggestions.
  renderSuggestion (suggestion) {
    return(
      <div>
        {suggestion.name}
      </div>
    )
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue (suggestion) {
    return suggestion.name
  };

  onChange (event, { newValue }) {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested ({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search for a product',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      // <Autosuggest
      //   suggestions={suggestions}
      //   onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
      //   onSuggestionsClearRequested={this.onSuggestionsClearRequested}
      //   getSuggestionValue={this.getSuggestionValue}
      //   renderSuggestion={this.renderSuggestion}
      //   inputProps={this.inputProps}
      // />
      <p>Soon-to-be autosuggest</p>
    );
  };
};

export default SearchBar;