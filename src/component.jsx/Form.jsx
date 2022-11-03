import React, {useState} from 'react'

const Form = () => {

    const [name, setName]= useState('');
    const [email, setEmail] = useState('');
    

    const funckName=(e) => {
        setName(e.target.value)
    }
     
    const funckEmail = (e) => {
      setEmail(e.target.value)
    }




  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>Email: {email}</h2>
        <form action=''>
            <input tipe='namme' value={name} onChange={funckName}></input>
            <input tipe='email' value={email} onChange={funckEmail}></input>
        </form>
        
    </div>
  )
}

export default Form