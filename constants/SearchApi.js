import api from "./api";

const searchApi = new Map();
api.forEach(obj => (
  searchApi.set(obj.id, obj)
))

export default searchApi;

// I write the logic here outside the route to avoid  the rerender of code which
// got proccessed in each time i hit the route in the server;
// BUT now it only calculated only one the first one - even if you not hitted the route;

// Setting-up the all exercises that we have, and then search locally (filtering localy);
// Converting exercises to map to used in search, Better structure than array, O(1);