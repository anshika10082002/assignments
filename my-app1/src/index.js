import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  TextArea from "./App"



const root = ReactDOM.createRoot(document.getElementById('root'));

// //function component
// const HeadingComponent  =  ()  =>{
//   return <h1>Hello World</h1>

// }
// //class component
// class HeadingComponentUsingClass extends React.Component{
//     render(){
//       return <h1>Hello world again</h1>
//     }
// }


root.render(
  <React.StrictMode>
    <TextArea/>
  
  </React.StrictMode>
);

// {/* <HeadingComponent/>
 //  <HeadingComponentUsingClass/> */}



