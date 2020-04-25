import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TableRow } from './TableRow'



class Form extends React.Component{

  constructor(props){
    super();

    this.props = props;
    this.state={
      title : '',
      date : ''
    }
  }

  update = (e)=>{
    var target = e.target.name;
    var value = e.target.value;
    this.setState({
      [target]: value
    })
  }

  onAdd = (e)=>{
    e.preventDefault();
    this.props.onAdd(this.state);
  }

  render(){
    return(
      <form className="form-inline">
        <div className="form-group mb-2">
          <label  className="sr-only">Titolo</label>
          <input type="text" className="form-control" placeholder="titolo" name="title" value={this.state.title} onChange={this.update}/>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label  className="sr-only">Data</label>
          <input type="date" className="form-control" value={this.state.date} name="date" onChange={this.update}/>
        </div>
          <button type="submit" className="btn btn-primary mb-2" onClick={this.onAdd}>add</button>
        </form>
    );
  }
}

class App extends React.Component {

  constructor(){
    super()

    this.state={
      list : [{title:'ciao',date:'prova'}]
    }

  }

  onTodoAdd = (newTodo)=>{

    this.setState((oldState)=>{
      return {list: [...oldState.list,newTodo]}
    });
  }

  render(){

    var rows = this.state.list.map((o,i)=>{
      return(
        <TableRow title={o.title} date={o.date} key={i}/>
      )
    })

    return (
      <div className="App">
        <div className="container">
          <h1>Todo</h1>

          <Form onAdd={this.onTodoAdd}/>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Titolo</th>
                <th scope="col">Data</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
