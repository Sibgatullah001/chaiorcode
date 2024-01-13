import React, { useEffect, useState } from "react";

function Github() {

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Sibgatullah001')
        .then(res => res.json())
        .then(data => {setData(data)})
    })


    return(
        <>
        <h1>Github followers: {data.followers}</h1>
        <img style={{width:"200px"}} src={data.avatar_url} alt="pic" />
        </>

    )
}

export default Github;