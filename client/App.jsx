import React from 'react';
import Input from './components/Input.jsx';

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
  
  render() {
    return (
      <div style={barStyle}>
        <p>Hello World, from Garrett 💯🙏💯!</p>
        <Input />
      </div>
    )
  }
}

export default App;