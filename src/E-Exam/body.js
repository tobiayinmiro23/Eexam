import React from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
const Body = () => {
    return ( 
        <div className="body" style={{textAlign:'center',width:'70%',height:'80vh',background:'wheat',boxShadow:"1px 3px 3px grey"}}>
            <h1>Question 1</h1>
            <Question1/>
            <Question2/>
            <Question3/>
        </div>
     );
}
 
export default Body;