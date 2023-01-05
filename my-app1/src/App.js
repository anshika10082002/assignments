import React from "react";
import "./index.css";

class Form extends React.Component {
    constructor(){
    super()
        this.state={
         fname:'',
         lname:''
         
        }
    }

    render(){
      return (
      <div>
            <form>
              <label for="fname">First Name</label>
              <br/>
              <input type="text" 
              value={this.state.fname}
               onChange={(event)=>this.state({fname:event.target.value})}/><br/>
              <label for="lname">Last Name</label>
              <br/>
              <input type="text"
              value={this.state.lname}
              onChange={(event)=>this.state({lname:event.target.value})}
              /><br/>
              <label for="gender">Gender</label>
              <br/>
              <input type="radio"/>Male<br/>
              <input type="radio"/>Female<br/>

              <label for="country">Country</label><br/>
              <select>
                <option>India</option>
                <option>America</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Korea</option>
              </select>
             </form>
             <br/>
             <button
             onClick={() => {
                this.setState({
                  
                });
              }}
             >Submit</button>
           
        </div>)
    }
}

export default  Form ;
  
