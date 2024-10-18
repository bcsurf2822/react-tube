

//Role: The VideoList component will render a list of videos provided by the Page component.
//Stateless: This component will not maintain its own state; it will simply render the list of videos passed down from the Page component
"use client";

import { VideoListItem } from "./videoListItem";


export const VideoList = ({videos, onVideoSelect}) => {
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem 
      onVideoSelect={onVideoSelect}
      key={video.etag}
      video={video}
    />
    )
  })
	return <ul className='col-12 col-md-4 mx-auto list-group'>{videoItems}</ul>;
};