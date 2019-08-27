import axios from "axios";

const KEY = "AIzaSyD1adhyQDEn2v0GV3YI1LTy9lR-FLLDzrg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY }
});
