import React from 'react';
import PlayButton from './PlayButton';
import Video from './Video';
function VideoList({videos}) {
  return (
    <>
        <section className='main-container'>
        {
        videos.map(video => <Video title={video.title} img={video.img} verified={video.verified} views={video.views} time={video.time} key={video.id} />)
        }
        <PlayButton>Play</PlayButton>
      </section>
    </>
  )
}

export default VideoList