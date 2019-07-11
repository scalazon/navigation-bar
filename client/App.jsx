import React from 'react';
import Input from './components/Input.jsx';
import SearchBar from './components/Search.jsx'

const barStyle = {
  backgroundColor: '#232f3e',
  height: '99px'
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount() {

  }
  render() {
    return (
      <div className='navigation_bar'>
        <h2>Welcome to Hackmazon - Please buy some stuff </h2>
        <SearchBar />
      </div>
    )
  }
}

export default App;

