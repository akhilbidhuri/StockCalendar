import axios from 'axios';
import store from '../store/store';
import {REQUEST, GET, DATEREQ, GETDATE, EMPTY} from '../store/actions'
var baseUrl = 'https://stockcalendly.herokuapp.com/'

export const getDate = (price) =>{
    store.dispatch({type:DATEREQ})
    let n = price.length;
    console.log(price)
    let s=null, e=null, profit =0, max =0, ts= null, te=null;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(price[j][1]-price[i][1]>max)
            {
                max =price[j][1]-price[i][1]
                ts = price[i][0]; te= price[j][0];
            } 
        }
        if(max>profit){
            profit = max;
            s = ts; e = te;
        }
    }
    console.log(s, e)
    //console.log("profit:", Number(price[Number(s)]-price[Number(e)]))
    if(s && e && profit >0)
    store.dispatch({type:GETDATE, payload:{start:s, end:e, profit:profit}});
    else
    store.dispatch({type:EMPTY}); 
} 
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
          getData()
          //store.dispatch({type:UPDATE, payload:{date:date, price:price}});
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
          store.dispatch({type:GET, payload:res.data.data});
          let prices = []
          for(let x=0;x<res.data.data.length;x++){
              if(res.data.data[x].price!=="null")
              prices.push([res.data.data[x].date, Number(res.data.data[x].price)])
          }
          console.log('p:',prices)
          getDate(prices)
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
         //store.dispatch({type:DELETE, payload:date})
         getData()
      })
      .catch((err)=>{
          console.log(err)
      })
}