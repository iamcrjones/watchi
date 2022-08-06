import watchiBE from "../../config/api.js";

// used to get all watch shows, used for manual testing
export async function getWatchShow() {
  const response = await watchiBE.get("/watchshows");
  return response.data;
}

// Takes a show ID and the user's watchlist ID to add a show to the user's watchlist
export async function addWatchShow(data) {
  const response = await watchiBE.post("/watchshows", data);
  return response.data;
}

// Takes show ID and watchlist ID to remove a show from a user's watchlist
export async function removeWatchShow(data) {
  const response = await watchiBE.delete(`/watchshows/${data}`);
  return response.data;
}

// Creates a watchlist when a user creates an account
export async function createWatchlist(data) {
  const response = await watchiBE.post("/watchlists", data);
  sessionStorage.setItem("watch_list", response.data.id);
  return response.data;
}

// Gets the user's watchlist ID and stores it in sessionStorage to be passed as data to other functions
export async function getWatchList() {
  const response = await watchiBE.get("/list/mylist");
  sessionStorage.setItem("watch_list", response.data);
  return response.data;
}

// Pulls all shows that are added to a user's watchlist
export async function getMyShows(data) {
  const response = await watchiBE.post("/list/myshows", data);
  return response.data;
}
