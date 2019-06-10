import React,{Component} from 'react';
import Loader from 'react-loader-spinner'
let colors= ['#2E7D32', '#6A1B9A', '#0277BD', '#EF6C00']
class loading extends Component {
    state={
        color:colors[Number(Math.random(10)*10%3).toFixed()]
    }
    componentDidMount(){
        this.interval = setInterval(this.colorChange, 600)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    colorChange = () =>{
        //console.log(this.state.color)
        this.setState({color:colors[Number(Math.random(10)*10%3).toFixed()]})
    }
    render() {
     return(
      <Loader
         type="Puff"
         color={this.state.color}
         height="150"	
         width="150"
      />   
     );
    }
 }

 export default loading;