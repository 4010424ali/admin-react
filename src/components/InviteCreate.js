import React,{ useState } from 'react'
import axios from 'axios'


const InviteCreate = (props) => {

   
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


  const handleClick = (e) => {
     e.preventDefault(); 

     if(e.target.id == "name" ) {
       setName(e.target.value)}
     else {
       setEmail(e.target.value)
     }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const dataToSubmit = {
      name: name,
      email
    }
    axios.post("/api/sendMail",dataToSubmit)

 }

  return(
        <form onSubmit={handleSubmit}>
            <input id="name" value={name} onChange={handleClick}/>
            <input id="email" value={email} onChange={handleClick}/>
            <button onClick={handleSubmit}>Send email</button>
        </form>

  )
}

export default InviteCreate

