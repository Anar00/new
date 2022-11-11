const name=document.getElementById("#name")
const surname=document.getElementById("#surname")
const age=document.getElementById("#age")
const experice=document.getElementById("#experice")
const nationality=document.getElementById("#Nationality")
const position =document.getElementById("#Position")
const myButton = document.getElementById('mybutton');
const table = document.getElementById('table');
const tbody = document.getElementById('tbodyID');
experice.addEventListener=function(){
    let xname=document.createElement("td")
    let xsurname=document.createElement("td")
    let xage=document.createElement("td")
    let xexperice=document.createElement("td")
    let xnationality=document.createElement("td")
    let xposition=document.createElement("td")

    xname.textContent=name.value;
    xsurname.textContent=surname.value;
    xage.textContent=age.value;
    xexperice.textContent=experice.value;
    xnationality.textContent=nationality.value;
    xposition.textContent= position.value;
    
       
    
    


    let tr=document.createElement("tr")
    tr.appendChild(xname);
    tr.appendChild(xsurname);
    tr.appendChild(xage);
    tr.appendChild(xexperice);
    tr.appendChild(xnationality);
    tr.appendChild(xposition);



    tbody.appendChild(tr);
    name.value="";
    surname.value="";
    age.value="";
    epreince.value="";

    nameInput.focus();
}