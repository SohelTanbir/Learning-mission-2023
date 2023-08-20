import React from 'react';

const fetchdata  = async ()=>{
    return setTimeout(()=>{
        console.log("data loaded");
    }, 5000);
}


const About = async () => {
    const data = await fetchdata();
    console.log(data)
    return (
        <h1>About  page {data}</h1>
    );
};

export default About;