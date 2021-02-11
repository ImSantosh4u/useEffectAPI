import React, { useState } from 'react';

function Ap() {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [mobile , setMobile] = useState("");

    function saveUser() {
        console.log({name,email,mobile})
        let data = {name , email , mobile}
        fetch("http://localhost:3333/list",{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log("resp",resp)
            })
        })
        
    }
    
    return (
        <div>
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
            <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
            <input type="text" name="mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/><br/><br/>
            <button type="submit" onClick={saveUser}>add new user</button>

        </div>
    );
}

export default Ap;