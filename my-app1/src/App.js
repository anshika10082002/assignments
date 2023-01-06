import React from "react";
import "./index.css";

class Form extends React.Component {
    constructor(){
    super()
        this.state={
         fname:'',
         lname:'',
         email:'',
         showData:false
         
        }
    }
    handleFormSubmit(event){
      event.preventDefault()
      
      alert("submitted")

      this.setState({showData:true})
    }
    

    render(){
      return (
      <div  className="container">
            <form onSubmit={(event)=>this.handleFormSubmit(event)}>
              <label >First Name :-</label>
              <br/>
              <input type="text" 
              value={this.state.fname}
               onChange={(event)=>this.setState({fname:event.target.value})}/><br/><br/>

              <label>Last Name :-</label>
              <br/>
              <input type="text"
              value={this.state.lname}
              onChange={(event)=>this.setState({lname:event.target.value})}
              /><br/><br/>

              <label>Email :-</label>
              <br/>
              <input type="email"
              value={this.state.email}
              onChange={(event)=>this.setState({email:event.target.value})}
              /><br/><br/>

              <label>Gender :-</label>
              <br/>
              <input type="radio" name="gender" required/>Male<br/>
              <input type="radio" name="gender"/>Female<br/><br/>

              <label>Country :-</label>
              <select>
                <option>India</option>
                <option>America</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Korea</option>
              </select><br/><br/>

              <label>Upload Image :-</label>
               <input type="file"/><br/>
              <br/>
             <button type="submit">Submit</button>
             </form>
            {this.state.showData && console.log(this.state.fname,this.state.lname, this.state.email)}
            
           
        </div>)
    }
}

export default  Form ;
  
