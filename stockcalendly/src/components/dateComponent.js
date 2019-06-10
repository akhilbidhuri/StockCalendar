import React, {Component} from 'react'
import Delete from '../delete.png'
import {add, deleteData} from '../services/api'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          
        </section>
      </div>
    );
  };

class date extends Component{

    state = { show: false, wrong:false}
    addData = (id, date, e) =>{
        let price = document.getElementById(this.props.id).value
        if(Number(price)){
        //console.log(e.target.value)
        add(id, date, price)
        this.setState({show: false})
        }
        else{
          this.setState({wrong:true})
        }
    }
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }
    delete=(date, id)=>{
        deleteData(date, id)
    }
    render(){
        return(
            <div className="date">
                <h1 className="stext">{this.props.date}</h1>
                {this.props.stock !=='null' &&
                    <h2 className="stext back">{this.props.stock} <img className="delete" src={Delete} alt="delete" onClick={()=>this.delete(this.props.date, this.props.id)}/></h2>
                }
                {this.props.stock === 'null' &&
                    <img src="https://img.icons8.com/color/48/000000/plus.png" className="add" alt="add" onClick={this.showModal}/>
                }
                <Modal show={this.state.show} handleClose={this.hideModal} >
                    <h2 style={{textAlign:'center', display:'inline-block'}}>Enter stock price for the date</h2>
                    <img style={{display:'inline-block'}}
                        className="close" src="https://img.icons8.com/color/48/000000/cancel.png" onClick={this.hideModal} alt="close"/>
                     <div className="field" >
                        <input
                            id={this.props.id}
                            type="text"
                            placeholder="Price"
                        />
                        <img type="submit" ref={this.priceInput} className="subut" src="https://img.icons8.com/color/48/000000/circled-chevron-right.png" alt="submit" onClick={(e)=>this.addData(this.props.id, this.props.date, e)}/>
                    </div>
                    {this.state.wrong && 
                    <div className="wrong">
                      <h4 style={{padding:'2%'}}>Enter Correct Value</h4>
                      </div>
                    }
                </Modal>
            </div>
        )
    }
}

export default date;