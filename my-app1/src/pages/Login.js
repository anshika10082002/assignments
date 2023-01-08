import React,{useState} from 'react' 
import './Login.css'

const Login=()=>{ 
	const [email,setEmail]=useState(""); 
	const [pwd,setPwd]=useState(""); 
	const[ setDataInput]=useState(""); //dataInput,
	const submitThis=()=>{
		const info={email:email,pwd:pwd}; 
		setDataInput([info]);
	}
	return(
	<div className='div'>
		<form action="" onSubmit={submitThis}> 
			<div> 
				<label htmlFor="email">Email</label><br/>
				<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/> 
			</div> <br/>
			<div> 
				<label htmlFor="pwd">Password</label><br/>
			<input type="text" name="pwd" id="pwd" value={pwd} onChange={(e)=>setPwd(e.target.value)}/><br/> 
			</div>  <br/>
            <br/>
			<button type="submit">Login</button>
		</form>
	</div>
)} 
export default Login    