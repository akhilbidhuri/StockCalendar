import React, {Component} from 'react'
import Loading from './dataloading';
import { connect } from 'react-redux';
class profit extends Component{

    componentDidMount(){

    }
    render(){
        return(
            <div>
                {(this.props.drequest || this.props.request) &&
                <div style={{margin:'20%'}}>
                    <Loading/>
                </div>
                }
                {!this.props.drequest && this.props.profit>0 && !this.props.empty && !(this.props.drequest || this.props.request) &&
                    <div className="results">
                    <div className="profit">
                    <h1><img style={{width:'30px', height:'30px'}} src="https://img.icons8.com/ultraviolet/40/000000/rupee.png" alt="profit"/>{this.props.profit}</h1>
                    <p>Profit</p>
                    </div>
                    <div className="dates">
                    <h3 className="pro">Buy Date  <span style={{fontSize:'150%', background:'#43A047', borderRadius:'20px', border:'2px solid #43A047'}}>{this.props.buyDate}</span></h3>
                    <h3 className="pror">Sell Data <span style={{fontSize:'150%', background:'#43A047', borderRadius:'20px', border:'2px solid #43A047'}}>{this.props.sellDate}</span></h3>
                    </div>
                    </div>
                }
                {this.props.empty && !(this.props.drequest || this.props.request) &&
                    <div className="error">
                    <img className="empty" src="https://img.icons8.com/dusk/64/000000/delete-database.png" alt="empty"/>
                    <h2>Give Sufficient data</h2>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps)(profit);