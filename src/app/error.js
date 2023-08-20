'use client'
import Link from "next/link";

 // Error components must be Client Components
 

 
const Error =  ()=> {


  return (
    <div>
            <h1 style={{fontSize:'50px', paddingTop:'150px'}}>Opps!</h1>
                <h3>an Error occured</h3>
              
           <button style={{padding:'10px 30px', margin:'10px'}}>
                <Link href="/">Home</Link>
           </button>
    </div>
  )
}
export default Error;