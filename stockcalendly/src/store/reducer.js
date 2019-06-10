import {REQUEST, GET, UPDATE, DELETE} from './actions'
let newStock = []
export default (state = {
    request: false,
    stockData:[]
}, action)=>{
    switch(action.type){
        case REQUEST: 
                return {...state, request: true}
        case GET:
            return {...state, stockData:action.payload, request: false}
        case UPDATE:
            newStock = [...state.stockData];
            newStock[Number(action.payload.date)-1].price = action.payload.price;
            return {...state, stockdata:newStock, request:false}
        case DELETE:
            newStock = [...state.stockData];
            newStock[Number(action.payload)-1].price = "null";
            console.log('new stock data:', newStock)
            return {...state, stockData: newStock, request:false} 

        default :
            return {...state}
    }
}