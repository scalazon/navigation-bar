import React from 'react';
import Input from './components/Input.jsx';
import SearchBar from './components/Search.jsx'

const barStyle = {
  backgroundColor: '#232f3e',
  color: 'white',
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
      <div style={barStyle}>
        <p>Hello World, from Garrett 💯🙏💯!</p>
        <p>Testing my ability to update with Git</p>
        {/* <Input /> */}
        <SearchBar />
      </div>
    )
  }
}

export default App;

