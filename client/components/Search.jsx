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
    this.getSuggestions = this.getSuggestions.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.broadcastASIN = this.broadcastASIN.bind(this);
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

    return inputLength === 0 ? [] : this.state.rawproductData.filter(product =>
      product.productTitle.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  // Use your imagination to render suggestions.
  renderSuggestion (suggestion) {
    return(
      <span>{suggestion.productTitle}</span>
    )

  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue (suggestion) {
    return suggestion.productTitle
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
      suggestions: this.getSuggestions(value)
    });
    console.log('sugesstions are now', this.getSuggestions(value) )
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    });
  };

  // Function to broadcast ASIN of selected item once item is clicked or enter is pressed
  broadcastASIN (event, suggestionObject) {
    console.log('selected item ASIN:', suggestionObject.suggestion.asin);
    const bc = new BroadcastChannel('product-change');
    bc.postMessage(suggestionObject.suggestion.asin);
  };

  render() {
    // const { value, suggestions } = this.state;
    const value = this.state.value;
    const suggestions = this.state.suggestions;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search for a product',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        onSuggestionSelected={this.broadcastASIN}
        inputProps={inputProps}
      />
    );
  };
};

export default SearchBar;