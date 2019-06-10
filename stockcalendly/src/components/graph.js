import React, {Component} from 'react'
import { connect } from 'react-redux';
import Loading from './dataloading'
import CanvasJSReact from '../canvasjs-2.3.1/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class graph extends Component{
    
    render(){

        let data = []
        for(let i=0;i<this.props.stockData.length;i++){
            if(this.props.stockData[i].price!=='null')
            data.push({x:Number(this.props.stockData[i].date), y:Number(this.props.stockData[i].price)})
        }
        //console.log('data',data)
        const options = {
            theme: "light2", 
            animationEnabled: true,
            zoomEnabled: true,
            height: 300,
            padding: 3,
            title: {
                text: "Stock Data"
            },
            axisY: {
                includeZero: false
            },
            data: [{
                type: "area",
                dataPoints: data
            }]
        }
        if(this.props.stockData.length>0 && !(this.props.drequest || this.props.request))
        return(<div style={{margin:'3%'}}>
                <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			    />                
            </div>
        )
        else 
        return(
            <div style={{margin:'15%'}}>
                <Loading/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps)(graph);