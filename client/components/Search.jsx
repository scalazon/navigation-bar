/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import Autosuggest from 'react-autosuggest';
import Axios from 'axios';
import React from 'react';
import theme from './Search.styles.js';
class SearchBar extends React.Component {
  constructor() {
    super();

    
    this.state = {
      //Value currently typed into search bar
      value: '',
      //array of suggestions that match input
      suggestions: [],
      //array of all products pull in via Axios call
      rawproductData: [],
    };
    this.getSuggestions = this.getSuggestions.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
    this.broadcastASIN = this.broadcastASIN.bind(this);
  }

  //populate rawProductData with array of product objects from Atlas
  componentDidMount() {
    Axios.get(
      'http://hackmazonnavbar-env.bj77f9npm5.us-east-2.elasticbeanstalk.com/products/navBarData'
    ).then(result => {
      const productData = result.data;
      this.setState({
        rawproductData: productData,
      });
    });
  }

  // Get array of suggestions that match input
  // eslint-disable-next-line react/sort-comp
  getSuggestions (value) {

    //Trim input whitespace and make lower case
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    //if input is empty, return empty array. Otherwise return matching products where first n letters
    //match input
    return inputLength === 0 ? [] : this.state.rawproductData.filter(product =>
      product.productTitle.toLowerCase().slice(0, inputLength) === inputValue
    )
  }

  // Return title of clicked suggestion 
  getSuggestionValue (suggestion) {
    return suggestion.productTitle
  };

  // Get value of input
  onChange (event, { newValue }) {
    this.setState({
      value: newValue
    });
  };

  // Populate suggestions with results of getSuggestions
  onSuggestionsFetchRequested ({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    });
  };

  // Function to broadcast ASIN of selected item once item is clicked or enter is pressed
  broadcastASIN (event, suggestionObject) {
    const bc = new BroadcastChannel('product-change');
    bc.postMessage(suggestionObject.suggestion.asin);
  };

  //Function to render each suggestion span in the Div container
  renderSuggestion (suggestion,{ query, isHighlighted }) {
    if (!isHighlighted) {
      return(
        <span>{suggestion.productTitle}</span>
      )
    } else {
      return(
        <span id="suggestionHighlighted">{suggestion.productTitle}</span>
      )
    }

  }

 
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
          theme={theme}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          onSuggestionSelected={this.broadcastASIN}
          onSuggestionHighlighted={this.onSuggestionHighlighted}
          inputProps={inputProps}
        />


     
    );
  };
};

export default SearchBar;