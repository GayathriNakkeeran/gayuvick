import config from "../conf/index.js";  
//importing config object 

async function init() {
  //Fetches list of all cities along with their images and description
  // console.log(config.backendEndpoint+"/cities");
  
  let cities = await fetchCities();
  console.log(cities);

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
  let res = await fetch("http://3.7.137.201:8082/cities");
  let data = await res.json();
  return data;
  }
  catch(err){
    //alert(err);
    return null;
  }
  //use try catch block to catch errors // return value is null in case of error
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let card = document.createElement("div");
  //create some card div for columns--use from qtripstatic
  //link id should be same as given id
  //description is like 250+places
  //queryselector is taken from element -- copy -- copy as js path.
  card.className ="col-12 col-sm-6 col-lg-3 mb-4"; 
  card.innerHTML=
          
        `<a id = ${id} href = "pages/adventures/?city=${id}" >
           <div class="card tile adventure-grid">  
           <img class="tile-img img-fluid rounded mx-auto " src = "${image}" alt = "Bengaluru">
            <p class=" tile-text"> 
              ${city}<br>
              ${description}
            </p> 
           </div>  
         </a>        
      `
      let parent = document.querySelector("#data");
      parent.appendChild(card);

  

}

export { init, fetchCities, addCityToDOM };
