import React from 'react';

const VideoListItem = (props) => {
  // return <li>Video</li>
  return <li>{props.video.etag}</li>
};
export default VideoListItem;
