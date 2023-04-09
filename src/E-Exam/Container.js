import React from "react";
// import Body from "./body";
import Timer from "./Timer";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
const Container = () => {
    return ( 
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'flexStart'}}>
            <div className="body" style={{textAlign:'center',width:'70%',height:'80vh',background:'wheat',boxShadow:"1px 3px 3px grey"}}>
                <h1>Question 1</h1>
                {/* <Question1/>
                <Question2/>
                <Question3/> */}
              
            </div>
            <Timer/>
        </div>
     );
}
 
export default Container;