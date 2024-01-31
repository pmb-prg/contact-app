import React, { useState } from 'react';
import style from './Form.module.css'
import Contact from './Contact';
import { v4 } from 'uuid';
function Form() {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState();
    const [data, setData] = useState({
        id: "",
        Fname: "",
        Lname: "",
        Email: "",
        Phone: "",
    });
    const changeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    }

    const clickHandler = () =>{
        if(data.Email === "" || data.Fname === "" || data.Lname === "" || data.Phone === ""){
            setError(true);
        }else{
            setError(false);
            setContacts(contacts => ([...contacts, data]))
            setData({
                id: "",
                Fname: "",
                Lname: "",
                Email: "",
                Phone: "",   
            });
        }
    }
    const removeHandler = (index) => {
        const newContacts = [...contacts];
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }

  return (
    <div className={style.container}>
        <div className={style.form}>
            <input type='text' placeholder='First Name' name='Fname' value={data.Fname} onChange={changeHandler} />
            <input type='text' placeholder='Last Name' name='Lname' value={data.Lname} onChange={changeHandler} />
            <input type='email' placeholder='Email' name='Email' value={data.Email} onChange={changeHandler} />
            <input type='number' placeholder='Phone' name='Phone' value={data.Phone} onChange={changeHandler} />
            <button onClick={clickHandler}>Add Contact</button>
        </div>
        {error ? <div className={style.error}>Please enter valid data!</div> : <span></span>}
        <div className={style.contacts}>
            <h3>Contacts List:</h3>
            {contacts.length ?
                <div className={style.full}>{contacts.map((contact, index) =><Contact fname={contact.Fname} lname={contact.Lname} email={contact.Email} phone={contact.Phone} key={index} onDelete={removeHandler} />)}</div> :
                <div className={style.empty}> No Contacts Yet!</div>
            }
        </div>
    </div>
  )
}
export default  Form;
