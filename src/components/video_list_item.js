import React from 'react';

const VideoListItem = ({video}) => {
  // '{video}' in the above line is the same as
  // 'const video = props.video;' if within
  // the VideoListItem components
  //  You are just name a variable "video" within
  //  the component and assign it the value of the props.video
  //  being passed to the component.

  // return <li>Video</li>
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  console.log(video);

  return (
    <li  className="list-group-item">
      <div className="video-list media">
        <div className ="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
};
export default VideoListItem;
