import React from 'react';
import './App.css';
import {Column, Row} from 'simple-flexbox';
import Logo from './wealthy.jpg'
import Calender from './components/calendar'
function App() {
  return (
    <Row>
      <Column className="calendar" style={{borderRight:'1px solid #ddd'}}>
      <div className="head" style={{background:'#7b2ca3'}}>
        <img src={Logo} alt="logo" className="logo"/>
        <span className="ltext">wealthy</span>
      </div>
      <Calender/>
      </Column>
      <Column className="graphdata">
        <div className="head" style={{background:'#2dc161'}}>
        <img className="logo" src="https://img.icons8.com/plasticine/100/000000/combo-chart.png" alt="indicator"/>
          <span className="ltext" style={{marginLeft:'2%'}}>Indicator</span>
        </div>
      </Column>
    </Row>
  );
}

export default App;
