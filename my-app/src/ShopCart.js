import React, { Component } from "react";
import './Style.css'

class ShopCart extends Component{
   constructor(){
    super();

    this.state= {
        count:1
    };

   }
  
    Increment = () =>{
        this.setState(({ count: this.state.count + 1 }));
    }

 Decrement = () =>{
    this.setState( ()=> {
    if (this.state.count > 1) {
        return { count: this.state.count - 1 };
      }
    
 })
    }
        
    render(){
       
        return (
   
               <div className="container">
                <button onClick={this.Decrement}>-</button>
                <span>{this.state.count}</span>
                <button  onClick={this.Increment}>+</button>
            
            </div>
        )
    }
 

}


export default ShopCart;