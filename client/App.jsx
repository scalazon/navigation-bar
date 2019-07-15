import React from 'react';
import SearchBar from './components/Search.jsx'
import 'bootstrap'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount() {

  }
  render() {
    
    const imgStyle = {
      maxHeight: '10%',
      maxWidth: '15%'
    }
    
    return (
      <div>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
          <div className='row'>
            <img className="navbar-brand col-2" style={imgStyle} src='https://s3.us-east-2.amazonaws.com/elasticbeanstalk-us-east-2-746219401089/Hackmazon-logo-white.png?response-content-disposition=inline&X-Amz-Security-Token=AgoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQD9fOS99sZve7%2FiHo59PMGRiPS8lu5Xu0DfO8e2GSodPAIgfaCPm%2FTrA%2B3%2BWJQxwv2xPgfjVgxC1HEH2uxvZlHUSlMq2wMIGRAAGgw3NDYyMTk0MDEwODkiDLVdtk%2BumVQP5u%2BnnCq4A44TtlUztdYcChUckiLAC3lcgdWNdQMQYkkGpiL%2FrHhhFyl%2FHBd7ShVGpSaY7BrUaZbiI9RHXvO50nHK70W8miRxgFjpLWBYfaJyyLz%2FLaNM1BDDuIYHQ0Dmpsnk79qRzMlUAhibpXBiUQq4MKIVFHCK9gYC4q%2FLgCOYmC64L0FVNyrKdW0D7ThZwzVpGvULiuG1llL7acbxPJrHGcI3nkAC4ijUKp0gkjWGBWvuz%2BCIjUp9jplnOtU1CHc7IjoHpuG0YsOyaVskWVv2cgM%2Bq%2Fo9smfcmAyd%2Bvkm71N1IwiSLSyE8Ot4HLl9NqpHNP1WXCyQAt321EphkP7vttJBE5i18V2MBhk2t%2FyOdaNjnMV1sSZpiA%2BoiMFb6Axg017ZK8jVbmL5wxtrrujKpvyDoaOGjCxeSIubdcqQADIjtBBcc7MNi1vhmS7k4on12k0%2FU0QB%2Bsq2ond1CpiV5h%2FD6J50WUfeaZcv0xSgjDxSmybWz0du7E4e2AVsajtlYd0h2PBK%2FWOWhfxLGLDjJ9%2FtILY2Q8f1NIm%2F4nwsGUHuN5SaXh5t%2BHaqKMht4EOKNg5%2Bg5dHpUvrgDZoMNe%2FsukFOrQB8rij7nZRvJtmhcJMFPULKELIZJ3Nl%2BegL4UHt1rFNuaXc9sSWcguDfex4%2B7avst39%2BGtlokSPE6nIP7TSZ4ZQMmE3rfE5OtPU1MbwlPmZDDHCzhMOPNUzNyw5Outrqsbn3NgYqAak2SOdOL4Kyl%2BBBEi%2FNj7HNiQezb4ne9TYPPCBDztI%2FVNEy%2FgXNB0SGKkJpJibT8UCoA5%2BkRsTrS%2BP%2BA0x0beWa3BBRPHgoj%2F%2F0u8nVkC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190715T154656Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA23PREN6AYPDYLNGG%2F20190715%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=dab1eacf74ad63b6b25dda9225fcf366ef89615f32d3c188b0cf2010bd0c47d9'></img>
            <div className="collapse navbar-collapse col-10">
              <SearchBar />
            </div>

          </div>
        </nav>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
          <div className="collapse navbar-collapse">
            <ul class='navbar-nav mr-auto'>
              <li class='nav-item active'>
                <a class='nav-link' href='#'>Deliver to Garrett</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      // <div className='navigation_bar'>
      //   <h2>Welcome to Hackmazon - Please buy some stuff </h2>
      //   <SearchBar />
      // </div>
    )
  }
}

export default App;

