import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [result, setResult] = useState("")
  axios.defaults.baseURL ="http://localhost:3000";
  const getAuth = (e)=>{
    e.preventDefault();
  const getPost = async() =>{
    try{
      const res = await axios.post("/createUser",{
        email:email,
        password:password,
      }
      );
      setResult(res.data.msg);
    }catch(err){
      console.log(err);
    }
  }
  getPost();
};
//   useEffect(()=>{
//     const getName = async() =>{
//       try{
//         const res = await axios.post("/getName",{
//           headers:{
//             Authorization:"Bearer"+"mansi"
//           }
//         });
//         setName(res.data.name);
//       }catch(err){
//         console.log(err);
//       }
//     }
//     getName();
//   },[name]
// );

  return (
      <div className='main'>
        <form onSubmit={getAuth}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email id'/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/>
          <p>{result}</p>
          <button type='submit'>Login</button>
        </form>
      </div>
  )
}

export default App
