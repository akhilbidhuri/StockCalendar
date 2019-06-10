import axios from 'axios';
import store from '../store/store';
import {REQUEST, GET, UPDATE, DELETE } from '../store/actions'
var baseUrl = 'http://localhost:5000/'
export const add = (id, date, price) =>{
    store.dispatch({type:REQUEST})
    console.log('add:', id, date, price)
    axios({
        method: 'post',
        url: baseUrl + 'updatePrice',
        headers: {}, 
        data: {
          'id': id,
          'date': date,
          'price': price 
        }
      })
      .then((res)=>{
          console.log(res)
          store.dispatch({type:UPDATE, payload:{date:date, price:price}});
      })
      .catch((err)=>{
          console.log(err)
      })
}
export const getData = () => {
    store.dispatch({type:REQUEST})
    axios({
        method: 'get',
        url: baseUrl + 'getData',
      })
      .then((res)=>{
          console.log("result:",  res.data.data)
          store.dispatch({type:GET, payload:res.data.data});
      })
      .catch((err)=>{
          console.log(err)
      })
} 

export const deleteData = (date, id) =>{
    console.log('request', date, id)
    store.dispatch({type:REQUEST})
    axios({
        method: 'post',
        url: baseUrl + 'deletePrice',
        headers: {}, 
        data: {
          'date': date,
          'id': id 
        }
      })
      .then((res)=>{
         store.dispatch({type:DELETE, payload:date})
      })
      .catch((err)=>{
          console.log(err)
      })
}