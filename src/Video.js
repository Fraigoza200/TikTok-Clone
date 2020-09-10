import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSideBar from './VideoSideBar'

function Video({ url, channel, description, song, likes, messages, shares }) {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    const handleVideoPress = () => {
        if (playing){
            videoRef.current.pause()
            setPlaying(false)
        } else{
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        // Make sure to add a url to video tag
        <div className='video'>
            <video onClick={handleVideoPress}  loop ref = {videoRef} className='video_player' src={url}></video>
            
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSideBar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}

export default Video
