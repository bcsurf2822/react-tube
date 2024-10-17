

//Role: This component will use an iframe to display and play the main video on the page.
//Props: It will receive the selectedVideo as a prop from the Page component to display the currently selected video.

import React from 'react';

const VideoDetail = ({ video }) => {

  const url = `https://www.youtube.com/embed/${video}.id.videoId`;

	if (!video) {
		return (
			<div className='text-center'>
				<p>Enter a search term to get started</p>
			</div>
		);
	}

	return (
		<div className='video-detail col-md-8'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url} />
			</div>
			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;