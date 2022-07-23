import React, { useState,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Test()  {
  
    const [rotate,setRotet] =useState(false)
    return (
      <div align="center" style={{borderRaduis:'20px',backgroundColor:"white",width:"100vw",height:'100vh'}}>
        <motion.div
        animate={{x:rotate?200:-200}}
        transition={{duration:1}}
        onClick={()=>{
            setRotet(!rotate)
        }}
        style={{backgroundColor:"blue",width:"20vw",height:'20vh'}}>

        </motion.div>
      </div>
    )
};

