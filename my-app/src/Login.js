import React, { Component } from "react";
import Sign from "./Sign";
import ShowLog from "./ShowLog";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      emaiL: "",
      showSign:false,
      date:"",
      showS:false
    };

    this.inputRef = React.createRef()
  }

  componentDidMount (){
    this.inputRef.current.focus()
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ emaiL: event.target.value });
  };

  
 Result = (event) => {
    event.preventDefault();
  this.setState({ showS: true });
 
  };

  ChangeSign=()=>{
    this.setState({showSign:true})
     }
    

  render() {

   
    if(this.state.showSign){
      return <Sign></Sign>
     }

     if (this.state.showS) {
      return (
        <ShowLog
          name={this.state.name}
          email={this.state.emaiL}
        />
      );
    }

    const { name, email } = this.state;
    return (
      
      <form onSubmit={this.Result} className="second">
        <div>
          <label>Your Name</label>
          <input type="text" value={name} onChange={this.handleName} ref={this.inputRef}></input>
          
        </div>
    
        <div>
          <label>Your Email</label>
          <input type="text" value={email} onChange={this.handleEmail}></input>
          
        </div>
        <button id="log" type="submit" >Login</button>
        <button id="create" onClick={this.ChangeSign} >Create An Account</button>
      </form>

     
    );
  }
}

export default Login;
