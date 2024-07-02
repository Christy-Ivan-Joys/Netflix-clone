import React, { useEffect, useState } from "react";
import './Banner.css'
import axios from "../../axios";
import { apiKey, baseURL,imgURL } from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState()


  useEffect(() => {
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response) => {
      console.log('response isss', response.data)
      setMovie(response.data.results[0])

    })
  }, [])
  return (
    <div className="banner" style={{backgroundImage:`url(${movie? imgURL+movie.backdrop_path:""})`}}>
      <div className="content">
        <h1 className="title">{movie ?movie.title || movie.name :""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie? movie.overview:""}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner