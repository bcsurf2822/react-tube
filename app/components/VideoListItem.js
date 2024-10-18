

//Role: This component will be responsible for rendering a single video within the sidebar list.
//Stateless: Like VideoList, this component will be stateless and will render what it’s given via props.

export const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return ( 
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt="" />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}