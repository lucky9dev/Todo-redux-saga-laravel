import ActionTypes from '../constant/constant';
import React, { Component } from 'react'



const INITIAL_STATE = {
   id : '' ,
   text : '' ,
   error : 'no'
}

export default (state = INITIAL_STATE , action) => {
    
      
     switch (action.type) {
      
       
        case ActionTypes.TODO_DATA_FETCH:
                return ({
                    data : action.payload 
                })  
        case ActionTypes.TODO_DATA_REQUEST:
                return (
                    state
                )  
        default:
                 return state;
    }

}