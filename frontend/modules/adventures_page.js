
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  return search.slice(6);
  
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it

}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  //console.log(config.backendEndpoint+"/adventures?city="+city);
  try{
  let res = await fetch(`${config.backendEndpoint}/adventures?city=${city}`)
  return await res.json();}
  catch(err){
    return null;
  }

}
// city = "Bangalore";
// adventures = fetchAdventures(city);
// addAdventureToDOM(adventures);

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  adventures.forEach(element => {
    let card = document.createElement("div");
    //create some card div for columns--use from qtripstatic
    //link id should be same as given id
    //description is like 250+places
    //queryselector is taken from element -- copy -- copy as js path.
    card.className ="col-6 col-sm-6 col-lg-3 mb-4 position-relative"; 
    card.innerHTML=
            
          `<a id = ${element.id} href = "detail/?adventure=${element.id}" >
          <div class = "category-banner">
             <p>${element.category}</p>
             </div>
             <div class="activity-card">  
             
             <img class="activity-card img rounded mx-auto" src = "${element.image}" alt = "Bengaluru">
              <div class="text d-flex w-100"> 
               <div class="flex-fill justify-content-start "> ${element.name}</div>
                <div class="justify-content-end"> ₹${element.costPerHead}</div>
                <div class="line-break"></div>
                <div class="flex-fill justify-content-start"> Duration</div>
               <div class="justify-content-end">${element.duration} Hours</div>
              </div> 
             </div>  
           </a>        
        `
    let parent = document.querySelector("#data");
    parent.appendChild(card);
    
  });
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM


}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
  let durationFilteredList =[];
  list.filter(item=>{
    if(parseInt(item["duration"])>=low && parseInt(item["duration"])<=high ){
      durationFilteredList.push(item);
    }
  })
  
  return durationFilteredList;

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  let filteredList = list.filter(function(item){
    if(categoryList.includes(item.category)){
      return item;
    }
  })

  return filteredList;
  
  // 1. Filter adventures based on their Category and return filtered list

}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  if (filters["duration"]=="" && filters["category"]==""){
   
    return list;
    
  }
 
  if(filters["duration"]!="" && filters["category"]==""){
    
    let [low,high] = filters["duration"].split("-");   
    let ans= filterByDuration(list,low,high);    
    return ans;
  }
  if(filters["category"]!=[] && filters["duration"]==""){
   
   let ans1= filterByCategory(list , filters["category"]);
   return ans1;
  }

  if(filters["duration"]!="" && filters["category"]!=[]){
    
    let [low,high] = filters["duration"].split("-");    
    let ans= filterByDuration(list,low,high);    
    let ans1= filterByCategory(ans , filters["category"]);
   return ans1;
  }
  
  
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods



  
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage
  //console.log(JSON.stringify(filters));
  window.localStorage.setItem("filters" , JSON.stringify(filters));
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
  return ( JSON.parse(window.localStorage.getItem("filters")));
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
  let Categoryparent=document.querySelector("#category-list");
  filters["category"].forEach( items=>{
    Categoryparent.innerHTML+=
    `<div class="category-filter">
    ${items}
    </div>
    `  })

    let durationSelect=document.querySelector("#duration-select")
    durationSelect.value = filters["duration"];
  }
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
