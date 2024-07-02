import React, { useState, useEffect } from 'react'
import youtube from 'react-youtube'
import './Rowcard.css'
import axios from '../../axios'
import { apiKey, imgURL } from '../../constants/constants'
import YouTube from 'react-youtube'
function Rowcard(props) {
  const [movies, setMovie] = useState([])
  const[urlId,setUrlId]=useState()

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log('heading', response.data)
      setMovie(response.data.results)
    })

  }, [])
  const PlayVideo = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${apiKey}`).then((response)=>{
            if(response.data.results.length!==0){
              setUrlId(response.data.results[0])
              console.log('keyyyyyyyyy',response.data.results[0].key)
            }
    })
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }

  return (

    <div className='row'>
      <h1>{props.title}</h1>
      <div className='posters'>

        {movies.map((item) =>

          <img onClick={() => PlayVideo(item.id)} className={props.isSmall ? 'small-poster' : 'poster'} src={`${imgURL + item.backdrop_path}`} />

        )}
      </div>
      {urlId &&  <YouTube videoId={urlId.key} opts={opts}/>}
     
    </div>
  )
}

export default Rowcard