import React from "react";
import "./index.css";

class Form extends React.Component {
    constructor(){
    super()
        this.state={
         fname:'',
         lname:'',
         
        }
    }
 
    render(){
      return (
      <div  className="container">
            <form onSubmit={(event)=>{event.preventDefault()}}>
              <label >First Name :-</label>
              <br/>
              <input type="text" 
              value={this.state.fname}
               onChange={(event)=>this.state({fname:event.target.value})}/><br/><br/>

              <label>Last Name :-</label>
              <br/>
              <input type="text"
              value={this.state.lname}
              onChange={(event)=>this.state({lname:event.target.value})}
              /><br/><br/>

              <label>Gender :-</label>
              <br/>
              <input type="radio"/>Male<br/>
              <input type="radio"/>Female<br/><br/>

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
             </form>
             <br/>
             <button type="submit"
             onClick={() => {
                this.setState({
                  
                });
              }}
             >Submit</button>
           
        </div>)
    }
}

export default  Form ;
  
