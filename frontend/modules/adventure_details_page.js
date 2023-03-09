import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  //console.log(search);
  return search.slice(11);



  // Place holder for functionality to work in the Stubs
  //return null;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try{
    let res = await fetch(`${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`)
    return await res.json();}
    catch(err){
      return null;
    }


  // Place holder for functionality to work in the Stubs
 // return null;
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  let heading=document.querySelector("#adventure-name");
// console.log(adventure);
  heading.innerHTML=`${adventure.name}`

  let subHeading = document.querySelector("#adventure-subtitle");
  subHeading.innerHTML = `${adventure.subtitle}`

  let gallery = document.querySelector("#photo-gallery");
  let photoArray = adventure.images;
  photoArray.forEach(element => {
    gallery.innerHTML+=`<img src=${element} class="activity-card-image">`    
  });

  let about=document.querySelector("#adventure-content");
  about.innerHTML=`
  <p>${adventure.content}</p>`


}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  //console.log(images);

  let gallery = document.querySelector("#photo-gallery");
  gallery.innerHTML=`
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
  </div>
  <div class="carousel-inner">
   </div>  
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
  `
  //console.log("hii");

    let carouselIm = document.querySelector("#carouselExampleIndicators > div.carousel-inner");
    //let firstImage = images[0];
    
    
    let carouselInd = document.querySelector("#carouselExampleIndicators > div.carousel-indicators");
    

   
  // console.log(""+(images.indexOf(element)+1));
  let row=0;
   images.forEach(element => {
   
    //console.log(images.indexOf(element)===0);
    if(row==0){
      
      carouselIm.innerHTML=`<div class="carousel-item active">
          
       <img src= ${images[0]} class="activity-card-image d-block w-100" alt="..."></img>
    </div>`
    carouselInd.innerHTML=`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" 
    class="active" aria-current="true" aria-label="Slide 1"></button>`
    row++;
    }
    else{
      // console.log("hii");
      // console.log(typeof(""+(images.indexOf(element)+1)));
    // console.log("Slide "+(images.indexOf(element)+2))
    //let slide = images.indexOf(element) +1 ;
    carouselInd.innerHTML+=`
  <button type="button" data-bs-target="#carouselExampleIndicators"
   data-bs-slide-to="${images.indexOf(element)}"  aria-label="Slide${ (images.indexOf(element)+1)}"
   ></button>`
   //console.log(""+(images.indexOf(element)+1));
    carouselIm.innerHTML += `
    <div class="carousel-item">
    <img src=${element} class="activity-card-image d-block w-100" alt="...">
  </div>`}
}
)
  //console.log( images.indexOf(element) +1 );
//   let carouselButton=document.querySelector("#carouselExampleIndicators");

//   carouselButton.innerHTML+=`<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Previous</span>
// </button>
// <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//   <span class="carousel-control-next-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Next</span>
// </button>`

  
   }


  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images



//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
