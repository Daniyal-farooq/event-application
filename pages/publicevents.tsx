import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {getDocs,query,collection ,where } from  "firebase/firestore";
import {db} from '../database'
import styles from '../styles/publicevents.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { async } from '@firebase/util';


type typeofevent = {
    id: string,
    Eid: string,
    title: string,
    date: string,
    time: string,
    location: string,
    description: string,
    creator: string
  }
const publicevents = () => {

    const [events , setEvents] = useState<typeofevent[]>([])
    const [Search ,setSearch] = useState<string>("")
    const [loader , setLoader] = useState<boolean>(false)

    useEffect(() => {

        getter()
    
      }, [])
      const getter=async()=>{
        const querySnapshot = await getDocs(query(collection(db, "events.")));
    
    
    let eventlist:typeofevent[] = []
     querySnapshot.forEach((doc) => {
        eventlist.push({
          Eid: doc.data().Eid,
          id: doc.id,
          title: doc.data().title,
          date: doc.data().time,
          time: doc.data().time,
          location: doc.data().location,
          description: doc.data().description,
          creator: doc.data().creator,
  
        });
      })
   
      setEvents(eventlist)
      }
      const searchhandler = async()=>{
        setLoader(true)
        const querySnapshot = await getDocs(query(collection(db, "events."), where("title", "==", Search)));
        let eventlist:typeofevent[] = []
        querySnapshot.forEach((doc)=>{
          eventlist.push({
            Eid: doc.data().Eid,
          id: doc.id,
          title: doc.data().title,
          date: doc.data().time,
          time: doc.data().time,
          location: doc.data().location,
          description: doc.data().description,
          creator: doc.data().creator,
          })
        })
        setLoader(false)
        setEvents(eventlist)
      }
  return (
    <>
          <div className={styles.container}>
  <h1 className={styles.bulb}>Globe Events</h1>
  <h3>The Pinnacle of luxrious events</h3>
</div>
      <div className="container"><div className="row">
        <div className="col-3"></div><div className="col-5"><Button  onClick={searchhandler} variant="dark">Search</Button>{' '}<input onChange={(e)=>{setSearch(e.target.value)}} ></input></div><div className="col-4"></div></div></div>
        {events.map((event)=>{
            return<>
            
                    
            <div className={styles.card}>
            <h1 className={styles.title}>{event.title}</h1>
            <h3 className={styles.t}>{event.description}</h3>
            <h3 className={styles.t}>{event.location}</h3>
            <h3 className={styles.t}>{event.date}</h3>
            <h3 className={styles.t}>{event.time}</h3>
            
            </div>
            
            
                
                <hr/>
            </>
            
        })}
    </>
  )
}

export default publicevents