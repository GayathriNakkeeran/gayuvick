import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  

  try{
    let res = await fetch(`${config.backendEndpoint}/reservations/`)
    return await res.json();}
    catch(err){
      return null;
    }

  // 1. Fetch Reservations by invoking the REST API and return them


  // Place holder for functionality to work in the Stubs
  return null;
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  let nope = document.getElementById("no-reservation-banner");
  let disp = document.getElementById("reservation-table-parent");
 if(reservations.length){
  disp.style.display="block";
  nope.style.display="none";
  //console.log("hii")
  
    
  
 }
 else{
  nope.style.display="block";
  disp.style.display="none";
  
  }
 

  //Conditionally render the no-reservation-banner and reservation-table-parent

  /*

    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */
 let table = document.getElementById("reservation-table");
 reservations.forEach(items =>{
  //console.log(items);

  const row = document.createElement("tr");
  const cell1 = document.createElement("td");
  console.log(items);

  cell1.innerText=items.id;
 // cell1.innerText = <b>+cell1.innerText+</b>;
  
  row.appendChild(cell1);
  const cell2 = document.createElement("td");
  cell2.innerHTML = items.name;
  row.appendChild(cell2);
  const cell3 = document.createElement("td");
  cell3.innerHTML = items.adventureName;
  row.appendChild(cell3);
  const cell4 = document.createElement("td");
  cell4.innerHTML = items.person;
  row.appendChild(cell4);
  const cell5 = document.createElement("td");
  //cell5.innerText=items.date;
 
  let dateForm = new Date(items.date);
  let dateNew = dateForm.getDate();
  let monthNew = dateForm.getMonth()+1;
  let yearNew = dateForm.getFullYear();
  //let datenew = dateForm.toLocaleDateString();
  let datePrint = dateNew+"/"+monthNew+"/"+yearNew;
  cell5.innerHTML = datePrint;
  row.appendChild(cell5);
  const cell6 = document.createElement("td");
  cell6.innerHTML = items.price;
  row.appendChild(cell6);
  const cell7 = document.createElement("td");
  let timeForm = new Date(items.time);
  let datemonth=new Date(items.time);
  let timee = timeForm.toLocaleTimeString().toLowerCase();
   let options={month:"long",year:"numeric", day:"numeric"};
  let monthForm = datemonth.toLocaleString("en-IN" , options);


  // cell7.innerText =monthForm+time;


  cell7.innerHTML = monthForm+", "+timee;
  row.appendChild(cell7);
  const cell8 = document.createElement("td");
  let adid =items.adventure;
  //cell8.setAttribute("class","reservation-visit-button");
  //cell8.setAttribute("id" ,"${items.id}");
  //console.log(adid);
  cell8.innerHTML=`
  <button id = "${items.id}" class="reservation-visit-button"><a href="../detail/?adventure=${items.adventure}">Visit adventure</a></button>`
  row.appendChild(cell8);

  
  // for (let j = 0; j <8; j++) {
  //   // Create a <td> element and a text node, make the text
  //   // node the contents of the <td>, and put the <td> at
  //   // the end of the table row
  //   const cell = document.createElement("td");
  //   console.log(items);
  //   const cellText = document.createTextNode(`items[j]}`);
  //   cell.appendChild(cellText);
  //   row.appendChild(cell);
  // }

  table.appendChild(row);
   

 }
 
 )

}

export { fetchReservations, addReservationToTable };
