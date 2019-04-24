import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }
  //since the above if, if run, has a return, the remaining part of the
  //function VideoDetail doesn't run.

  const videoId = video.id.videoId;
  //const url = 'https://www.youtube.com/embed/' + videoId;
  //The above is the same as the below.
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src= {url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>

  )
};



export default VideoDetail;
