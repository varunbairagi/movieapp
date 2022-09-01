import React,{useContext, useEffect, useState} from 'react'
import "./style.css";
import {NavLink} from "react-router-dom"
import { contextApp} from '../Context';
import {useParams} from "react-router-dom"
const ShowMore = () => {
    const {id} =useParams();
    const {data}=useContext(contextApp);
    const Data=data[id];
    console.log(data[id])

    const {poster_path,title,vote_average,original_language,overview,release_date}=Data;
    return (
        
        <>
        { id &&
    <div className="outer">
        <div className="img1">
            <img src={poster_path} alt="poster.jpg" />
        </div>
        <div className="details">
            <div className="inner">
                <h2>{title}</h2>
                <h5>{release_date}</h5>
            </div>
            <p>{overview}</p>
            <div className="extr">
            <h4>IMDB Rating : {vote_average}</h4>
            <h4>Language : {original_language}</h4>
            </div>
            <NavLink to="/"><button>Go Back</button></NavLink>
        </div>
    </div>
}
    </>
  )
}

export default ShowMore