import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { formatDate } from "./utils";

// TODO: Replace with actual YouTube player - this is just a thumbnail
const VideoPlayer = styled.img.attrs(({ id }) => ({
  src: getYoutubeThumbnail(id),
}))`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: -1;
  position: relative;
`;

const VideoArticle = styled.article`
  margin: 1rem 0.5rem;
  padding: 0;
`;

const Heading = styled.h2`
  font-weight: normal;
  margin: 0.5rem;
  font-size: 1.6rem;
`;

const PublishedDate = styled.time`
  display: block;
  font-weight: bold;
  font-size: 0.9rem;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const VideoTitle = styled.p`
  margin: 0.25em 0 1.5em 0;
`;

// You didn't enable CORS on the API endpoint :'-(

// fetchCORS :: url -> { contents: string, status: { http_code: int, content_length: int, content_type: string } }
// use allOrigin's free CORS proxy to fetch the dev task's videos, response per their API endpoint
//
const fetchCORS = (url) => fetch(`https://api.allorigins.win/get?url=${url}`);

const fetchVideos = async () => {
  const response = await fetchCORS(
    "https://www.globalcyclingnetwork.com/api/devtask"
  );
  const json = await response.json();
  return JSON.parse(json.contents);
};

const getYoutubeThumbnail = (id) =>
  `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) return;

    // Fetch videos if not already loading
    setLoading(true);
    fetchVideos().then(setVideos);
  }, [loading, setLoading, setVideos]);

  // TODO: Use spinner instead for loading state
  if (!videos.length) return <p> Loading... </p>;

  const [featuredVideo, ...otherVideos] = videos;

  return (
    <>
      <VideoPlayer id={featuredVideo._id} />
      <Heading> Latest videos </Heading>
      {otherVideos.map(({ _id: id, title, publishDate }) => (
        <VideoArticle key={id}>
          <Thumbnail src={getYoutubeThumbnail(id)} />
          <PublishedDate datetime={publishDate}>
            {formatDate(publishDate)}
          </PublishedDate>
          <VideoTitle>{title}</VideoTitle>
        </VideoArticle>
      ))}
    </>
  );
};

export default VideoPage;
