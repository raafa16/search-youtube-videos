import axios from "axios";

const KEY = "AIzaSyDwlIkMUX6zgZYnf6hSalRPpHZ8fSLhHoA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY }
});
