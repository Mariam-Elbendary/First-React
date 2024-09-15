import React, {Component} from "react";
import axios from "axios";

class RequestPost extends Component {

    constructor(){
        super();
        this.state = {
           name:"",
            email:"",
            body:""
        }
    }

    handleChange = (event) => {  
        // console.log('Posted Data:' , event.target.value);         
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/comments",this.state).then((response) => console.log(response.data))  
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit} id="poost">
                <div >
                    <label>Name </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Email </label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Body</label>
                    <input type="text" name="body" value={this.state.body}onChange={this.handleChange} />
                </div>
                <button type="submit" id="post">Post Data to API</button>
            </form>
        )
    }
}


export default RequestPost;