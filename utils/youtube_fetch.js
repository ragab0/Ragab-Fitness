"use client";
import { google } from 'googleapis';


const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API
});


export async function fetchSingleVideos(appDispatch, name) {
  try {
    const res = await youtube.search.list({
      part: 'snippet',
      q: name,
      type: 'video',
    });
    console.log(res.data.items);
    return response.data.items;
  } catch (error) {
    appDispatch({type: "fetchFailed", payload: error});
  }
}