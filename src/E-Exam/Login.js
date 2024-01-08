import React from "react";
const Login = () => {
    return ( 
        <div className="login" style={{width:'20rem',height:'18.8rem',background:'wheat',display:'block',margin:'auto',textAlign:'center',boxShadow:'1px 2px 3px black'}}>
            <h2>login</h2>
            <form action="" >
                <div style={{display:'block'}}>
                    <input style={{display:'block',width:'70%',margin:'auto',outline:'none',padding:'0.3rem',marginTop:'2rem',textAlign:'center'}} type="text" placeholder="Student ID"/>
                    <input style={{display:'block',width:'70%',margin:'auto',marginTop:'2rem',padding:'0.3rem',textAlign:'center'}} type="text" placeholder="Matric no"/>
                    <button  style={{width:'70%',marginTop:'2rem',background:'#61dafb',padding:'0.3rem',outline:'none',border:'none',border:'1px solid black'}}>login</button>
                </div>
               
            </form>
            
        </div>
     );
}
 
export default Login;