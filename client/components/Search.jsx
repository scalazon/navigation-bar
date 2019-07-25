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

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
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

  componentDidMount() {
    Axios.get(
      'http://hackmazonnavbar-env.bj77f9npm5.us-east-2.elasticbeanstalk.com/products/navBarData'
    ).then(result => {
      console.log('got the data!')
      const productData = result.data;
      this.setState({
        rawproductData: productData,
      });
    });
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  // eslint-disable-next-line react/sort-comp
  getSuggestions (value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.rawproductData.filter(product =>
      product.productTitle.toLowerCase().slice(0, inputLength) === inputValue
    )
  }

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