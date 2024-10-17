"use client";
import { useState } from "react";
import { SearchBar } from "./components/searchBar";
import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

//.env info Most of the time we have 2 sets of keys - one set for each environment. So one set for "development" (to use to test your app while you're building it) and another for "production" (for you app to use once it's deployed for the world to see).

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoSearch = (term) => {
    const url = "https://www.googleapis.com/youtube/v3/search";

    const params = {
      part: "snippet",
      key: API_KEY,
      q: term,
      type: "video",
    };

    axios
      .get(url, { params })
      .then((response) => {
        //this is where we are updating set state with data from the API
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="row justify-content-center">
      <SearchBar onSearchTermChange={videoSearch} />
    </div>
  );
}
