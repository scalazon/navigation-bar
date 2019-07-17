const theme = {
  container: {
    position: 'relative',
    width: '100%'
  },
  
  input: {
    width: '100%',
    height: 'auto',
    padding: '10px 20px',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: '300',
    fontSize: '16px',
    border: '1px solid #aaa',
    borderRadius: '4px'
  },
  
  inputFocused: {
    outline: 'none'
  },
  
  inputOpen: {
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0'
  },
  
  suggestionsContainer: {
    display: 'none',
  },
  
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    top: '51px',
    width: '100%',
    border: '1px solid #aaa',
    backgroundColor: '#fff',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: '300',
    fontSize: '16px',
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    zIndex: '100000000000'
  },
  
  suggestionsList: {
    margin: '0',
    padding: '0',
    listStyleType: 'none',
  },
  
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px',
    color: 'black'
  },
  
  suggestionHighlighted: {
    backgroundColor: '#ddd'
  }
  
};

export default theme;