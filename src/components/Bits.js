import React from 'react'
import '../stylesheets/Bits.css'
import troyAndJenny from '../images/TroyAndJenny.jpg'
import Draggable from 'react-draggable'


export default function Bits() {
    const [open, setOpen] = React.useState(true)
    
    if (!open) {
        return null
    }
    
    return (
      <Draggable>
        <div className="Bits--container">
            <div className="Bits--topBar">
                    <button onClick={()=>setOpen(false)} className="Bits--closeWindow">x</button>
            </div>        
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            alt="computer"
          />
          <img
            src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="phone with Eat Sleep Code Repeat on it"
          />
          <img
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80"
            alt="computer with image of code on it"
          />
          <img
            src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="lines of code at a 3/4 view"
          />
          <img
            src={troyAndJenny}
            alt="Of myself and Jenny"
            />
        </div>
      </Draggable>
    );
}