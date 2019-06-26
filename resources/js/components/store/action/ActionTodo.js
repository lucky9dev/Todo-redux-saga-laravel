import React, { Component } from 'react'
import axios from "axios";

let uri = '/Todo';

export class ActionTodo extends Component {
    
    TODO_FETCH_API() {

        return axios({
            method: "get" , url: uri
        });
    }

    TODO_ADD_API(item) {
        
        return axios({
            method: "post" , url: uri , data: item
        });
       
    }


    TODO_DELETE_API(id) {

        return axios({
            method: "delete" , url: uri+'/'+id ,
        });
    
    }
    
}

export default new ActionTodo()
