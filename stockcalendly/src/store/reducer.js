import {REQUEST, GET, UPDATE, DELETE, GETDATE, DATEREQ, EMPTY} from './actions'
let newStock = []


export default (state = {
    request: true,
    stockData:[],
    buyDate:'',
    sellDate:'',
    profit:0,
    drequest: false,
    empty: false
}, action)=>{
    switch(action.type){
        case EMPTY:
            return {...state, empty:true, drequest:false}
        case DATEREQ:
            return {...state, drequest:true}
        case GETDATE:
            //let res = getDate(state.stockData)
            return {...state, buyDate:action.payload.start, sellDate:action.payload.end, profit: action.payload.profit, drequest:false, empty:false}    
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
            //console.log('new stock data:', newStock)
            return {...state, stockData: newStock, request:false} 

        default :
            return {...state}
    }
}