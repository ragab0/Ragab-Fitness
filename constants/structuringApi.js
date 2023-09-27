/**
 * I write the logic here outside the nextjs API routes to avoid the rerender of code which
 * got proccessed in each time i hit the route;
 * BUT now it only calculated only one the first one - even if you not hitted the route;
 *
 * Since we have'nt database, we'll set-up the api of exercises in its right structures only by mapping on one time;
 * 01 One structure for searching - searching locally (filtering localy) 
 *    BY Converting exercises to map to used in search, Better structure than array, O(1);
 * 02 Another structure for getting basic information of our api;
 *
 */


import api from "./api";

const searchOnStructure = new Map();
const getTypesStructure = new Set();


(function() {
  api.forEach(obj => {
    searchOnStructure.set(obj.id, obj);
    getTypesStructure.add(obj.bodyPart);
  })
})();


const structuredApi = {
  searchOnStructure,
  getTypesStructure: [...getTypesStructure],
};


export default structuredApi;