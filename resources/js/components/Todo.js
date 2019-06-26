import React, { Component } from 'react'
import TodoList from './TodoList';
import {connect} from 'react-redux';

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

import ActionTypes from './store/constant/constant';

export class Todo extends Component {

      constructor(props) {
          super(props)
          
          this._FormSubmit =  this._FormSubmit.bind(this)  ;
          this._DeleteTodo =  this._DeleteTodo.bind(this)  ;


          this.state = {

                todo_text : '' ,
                LoadingShow : false ,
                item :[] ,

          } // End of State
      } // End of Constructor


    componentDidMount()
     {
         this.props.LoadTodo();
     }

   

    _FormSubmit  (e) {

        e.preventDefault() ;

        this.setState({ LoadingShow: true })

        if(this.state.todo_text === '')
        {
             NotificationManager.error('Please Fill Todo' , '' , 1000) ;
        }
        else
        {

          let data = { 'description' : this.state.todo_text }
         
          this.setState({
             todo_text : ''
           })

           this.props.AddTodo(data)
          
            NotificationManager.success('Todo Add Successfully' , '' , 1000);
            
        
        } // else
       
        setTimeout(() => {
          this.setState({ LoadingShow: false })
        }, 300);
        
    } // Enf of _FormSubmit


    _DeleteTodo  (id)  {

      
        this.setState({ LoadingShow: true })
       
        this.props.DeleteTodo(id)

      
         NotificationManager.info('Todo Remove Successfully' , '' , 1000);
       

        setTimeout(() => {
            this.setState({ LoadingShow: false })
          }, 300);
       

    } // Enf of _DeleteTodo

  
  

    render() {
        
        
        return (
            
            <div className='main_section'>
                
                
                  <Loading
                      show={this.state.LoadingShow}
                      color="green"
                    />
                    
                  <div className='row'>

                      <div className='col-md-12'>
                          <br/>
                      </div>

                      <div className='col-md-12 todo_border'>

                        <div className='col-md-3'></div>

                        <div className='col-md-6' id="todo_body">

                              <div className="center_heading">
                                  <h4>TODOS APP</h4>
                                  <p>This Demo showcases a simple workflow with Laravel and React Js.</p>
                              </div>

                              <div>
                                  <br/>
                                  <form onSubmit={this._FormSubmit} autoComplete="off">
                                      <input 
                                      type="text" 
                                      name="todo_text" 
                                      value={this.state.todo_text}  
                                      onChange={ (e) => ( this.setState({  todo_text : e.target.value }) ) } 
                                      className="form-control"
                                      placeholder="New Todo"
                                      />
                                  </form>
                              </div>

                              <div>
                                  
                                 <TodoList list = {this.props.TodoData} _DeleteTodo={this._DeleteTodo}/>
                              </div>


                        </div>  {/* end of todo_body */}
                    
                        <div className='col-md-3'></div>

                      </div>

                </div> {/* end of main row */}

            <NotificationContainer/> 

            </div>  // end of main div main_section

        ) // return

    } // render

} // main class 


function mapStateToProp(state){
    return({
        TodoData: state.root
    })
}

function mapDispatchToProp(dispatch){
    return({

        LoadTodo    :  ()     => {   dispatch({ type: ActionTypes.TODO_DATA_REQUEST })   } ,
 
        AddTodo     :  (item) => {   dispatch({ type: ActionTypes.TODO_DATA_ADD , data : item})  }  ,

        DeleteTodo  :  (id)   => {   dispatch({ type: ActionTypes.TODO_DATA_DELETE , data : id})  }  ,
        
    })
}


export default connect(mapStateToProp,mapDispatchToProp)(Todo);