import React from 'react'
import { useState } from 'react'
import styles from '../styles/login.module.css'
import { auth, signInWithEmailAndPassword } from "../database"
import { toast } from "react-toastify";
import Router from 'next/router';

const login = () => {
  

  const [email,setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [uu,setUu] = useState("")


  const onsubmithandler = async()=>{
    const res =  await signInWithEmailAndPassword(auth, email, password)
    const user:any=res.user
    const uid = user.uid
    const displayname = user.displayName
    const emaill = user.email
    localStorage.setItem("uid" , uid);
    console.log(uid);
    
    setUu(uid)
    localStorage.setItem("displayname" , displayname)
    localStorage.setItem("email" , emaill)
    toast.success('Successfull login!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    Router.push('/createevent')

  }
  return (
    <><div className={styles.spinner}></div>
    <div className={styles.card}>
       <div className="conatiner">
        
        <div className="row"></div>
        <div className="row"><div className="col-1"></div><div className="col-2">Email</div><div className="col-5"><input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="...here" name="text" className={styles.input}></input></div></div>
        <div className="row"></div>
        
        <div className="row"><div className="col-1"></div><div className="col-2">Password</div><div className="col-5"><input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="...here" name="text" className={styles.input}></input></div></div>
       </div>
       

      
<div className="row"><div className={`${styles.btn} col-md-3 offset-md-3`}> <button className={styles.button} onClick={onsubmithandler}>
    <span className={styles.button_lg}>
        <span className={styles.button_sl}></span>
        <span className={`${styles.button_text}`}>Submit</span>
    </span>
</button></div></div>

      </div>
    </>
  )
 
}


export default login