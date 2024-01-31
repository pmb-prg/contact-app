import React from 'react';
import style from './Contact.module.css';
import { motion } from "framer-motion";
const Contact = (props) => {
    const {key, fname, lname, email, phone, onDelete}  = props;

    

    return (
        <motion.div initial={{ scale: 0 }} animate={{  scale: 1 }} transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }} className={style.container}>
            <p>{fname} {lname}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={() => onDelete(key)}>Remove</button>
        </motion.div>
    );
};

export default Contact;