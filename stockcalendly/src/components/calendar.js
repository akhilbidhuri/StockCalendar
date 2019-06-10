import React, {Component} from 'react'
import Date from './dateComponent'
import { connect } from 'react-redux';
import {getData} from '../services/api';
import Loading from './dataloading';
class calendar extends Component{

    componentWillMount(){
        getData()
    }

    render(){
        return (<div style={{marginLeft:'3%', marginTop:'5%'}}>
            {!this.props.request && 
                this.props.stockData.map((i)=>(
               <Date key={i.id} id={i.id} date={i.date} stock={i.price}/>))
            }
            {this.props.request &&
            <div style={{marginLeft:'35%', marginTop:'10%'}}>
                <Loading/>
            </div>
            }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps)(calendar);