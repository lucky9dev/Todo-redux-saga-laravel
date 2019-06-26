import React, { Component } from 'react'

export class TodoList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    } // constructor
    
    render() {
       
        return (
                <div>

                    <br/><br/>

                    <div className="todo_item" style={{ overflowY : 'scroll' }}>
                       
                        {
                       
                            typeof this.props.list.data === 'undefined' ||  this.props.list.data.length === 0 ? <p>No Data Available</p> 
                            :
                            this.props.list.data.map((item , index) => (
                                
                                <p key={index}>

                                    {item.text}
                            
                            
                                    <span  
                                        className='' 
                                        onClick={ 
                                                () =>  
                                                {  
                                                    if(window.confirm('Are you sure you have to Remove this Todo ?'))
                                                    {
                                                     this.props._DeleteTodo(item.id) 
                                                    }
                                                }
                                            }
                                        >
                                       <i className="fa fa-times" aria-hidden="true"></i>
                                    </span>
                            
                                </p>
                            ))
                       }
                    </div>

                </div> // end of Main Div

        ) // return

    } // render

} // main class 


export default TodoList

