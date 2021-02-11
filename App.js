import React, { useEffect, useState } from 'react';
import Ap from './Ap';
// import { getList } from './list';

const App = () =>{
 const [data , setData] = useState([]);
 const [name , setName] = useState("");
 const [email , setEmail] = useState("");
 const [mobile , setMobile] = useState("");
 const [id , setId] = useState(null);

 useEffect(()=>{
   getList();
 },[])
   
 function getList(){
  fetch("http://localhost:3333/list").then((result)=>{
    result.json().then((resp)=>{
      setData(resp);
      setId(resp[0].id)
      setName(resp[0].name)
        setEmail(resp[0].email)
        setMobile(resp[0].mobile)
 
      
    })
  })
}
   
 

 function deleteUser(id){
   fetch(`http://localhost:3333/list/${id}`,{
     method:'DELETE'
   }).then((result)=>{
     result.json().then((resp)=>{
       console.log(resp)
       getList();
     })
   })
 }
   
 function selectUser(id){
   let item = data[id-1];
   setId(item.id)
   setName(item.name)
   setEmail(item.email)
   setMobile(item.mobile)
   
 }

 function updateList(){
   let item = {name, email, mobile,id};
   console.log("item",item);
   fetch( `http://localhost:3333/list/${id}`,{
     method:'PUT',
     headers:{'Accept':'application/json',
            'Content-Type':'application/json'
    },
    body:JSON.stringify(item)
   }).then((result)=>{
     result.json().then((resp)=>{
       console.log(resp);
       getList();
     })
   })
 }
  return(
    <div>
    <Ap/>
    <h4>api get method</h4>
    <table border = "1">
    <tbody>
    <tr>
    <td>ID</td>
    <td>Name</td>
    <td>Email</td>
    <td>Mobile</td>
    <td>operations</td>
    <td>updation</td>
    </tr>
    {
      data.map((item ,i)=>
      <tr key ={i}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.mobile}</td>
      <td><button onClick={()=>{deleteUser(item.id)}}>delete</button></td>
      <td><button onClick={()=>{selectUser(item.id)}}>select data</button></td>
      </tr>
      )
    }
    </tbody>
    </table>
    
    <br/>
    <h4>Update Data</h4>
    <div>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
    
    <input type="text" value ={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
    
    <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/><br/><br/>

    <button onClick={updateList} >Update List</button>
    </div>
    </div>
  )
}
export default App;
























// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { getList } from './list';

// function App() {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     let mounted = true;
//     getList()
//       .then(items => {
//         if(mounted) {
//           setList(items)
//         }
//       })
//     return () => mounted = false;
//   }, [])

//   return(
//     <div className="wrapper">
//       <h1>My Grocery List</h1>
//       <ul>
//         {list.map(item => <li key={item.item}>{item.item}</li>)}
//       </ul>
//       <form>
//        <label>
//          <p>New Item</p>
//          <input type="text" />
//        </label>
//        <button type="submit">Submit</button>
//      </form>
//     </div>
//   )
// }

// export default App;