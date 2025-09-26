# Opgavetitel
Dit navn
Umara Ahmed, WU12
Hold nr.

Valgfri opgave:
I chosse valgfri opgave C

## Tech-stack
* **Next.js**
A powerful front-end framework built on top of React.js.. It provides features like server-side rendering (SSR), static site generation (SSG), API routes, and optimized performance out of the box. Ideal for building fast, SEO-friendly web applications.
* **React**
 A JavaScript library for building user interfaces using reusable components. React makes it easy to manage application state and create dynamic, interactive UIs.
* **Git**
Git is a version control system that allows me to track changes, create branches, and manage different versions of the codebase. GitHub is used for remote repository hosting, collaboration, and code reviews.
* **React-icons**
 ( Et ikon-bibliotek, som er berrgnet på React.)
 A library of customizable icons designed specifically for React. It provides access to popular icon sets like Font Awesome, Material Icons, and more, making it easy to integrate scalable vector icons into the UI.
* **SASS**
  An extension of CSS that adds powerful features like variables, mixins, nesting, and modular architecture. It helps keep styles organized and reusable across components.

  * **Zod**
 A TypeScript-first schema validation library. Zod is used to validate user input from forms and ensure data integrity throughout the application.

 * **Web API from SwapHub**
 A means of accessing SwapHub data, that can help to build my own site.

 ## Kode-eksampel
Contact form component
(componts/ui/forms/contact/index.jsx)
```
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
    
```
# summery of kode

This is a client-side componenet that allow user to subscribe to a newsletter by entering their email. useState is hook to manage state: the user email input and a status message that provides feedback during and after submission. Once a valid email is provided, the component send a POST request to API endpoint with email address in JSON format, based on response it updates the status weather the subscription was success or not, e.g server issue or faild request.On success , it also clears input.UI with an input,submission button, and paragraph element that displays stusts messages dynamically.