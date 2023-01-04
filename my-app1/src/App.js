import React from "react";
import "./index.css";

class TextArea extends React.Component {
    constructor(){
    super()
        this.state={
         input:'',
         showParagraph:false
        }
    }

    render(){
      return (
      <div class="div">
            <textarea
             placeholder="enter text here...."
            value={this.state.input}
             onChange={(event)=> this.setState({input:event.target.value})}/>
             <br/>
             <button
             onClick={() => {
                this.setState({
                  showParagraph: !this.state.showParagraph,
                });
              }}
             >Change into UpperCase</button>
             {this.state.showParagraph && <p>{this.state.input.toUpperCase()}
             </p>}
           
        </div>)
    }
}

export default TextArea;
