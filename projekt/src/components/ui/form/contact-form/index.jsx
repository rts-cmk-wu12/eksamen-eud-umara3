
"use client";

import { useState } from "react";
import "./contact.scss";



export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!email.trim()){
            setStatus("first enter your email");
            return;
        }
        setStatus("send");
        

        try{
            const response = await fetch("http://localhost:4000/api/v1/newsletter", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email}),
            });

            if (response.ok){
                setStatus("Thanks for singin");
                setEmail("");
            } else{
                setStatus("Something went wrong. Try again");
            }
            } catch(error){
                setStatus("Server problem. Try again")
            }
            };

            return(
                <div className="contact-form">
                    <h1>Contact</h1>
                    <p>Sign up for our newsletter for latest updates</p>

                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <button type="submit">Subscribe</button>

                    </form>
                    <p>{status}</p>

                </div>
            )

        }  
    
