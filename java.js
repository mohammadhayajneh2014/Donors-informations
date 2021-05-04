'use strict'
let table=document.getElementById('table');

donar.allDonation=[];
function donar(name,age,amount){
this.name=name;
this.age=age;
this.amount=amount;

donar.allDonation.push(this);

}
function generateAge(){
let age=Math.floor(Math.random()*(30-18+1)+18);
donAge=age;

}
let total=0;
function calcTotal(){
   
  total=0
for (let i = 0; i < donar.allDonation.length; i++) {
    
 total+= parseInt(donar.allDonation[i].amount);    
}
return total;
}

donar.prototype.render=function(){
    for (let i = 0; i < donar.allDonation.length; i++) {
       
let tr1=document.createElement('tr')
table.appendChild(tr1);
let td1=document.createElement('td')
tr1.appendChild(td1);
td1.textContent=donar.allDonation[i].name;
let td2=document.createElement('td')
tr1.appendChild(td2);
td2.textContent=donar.allDonation[i].age;
let td3=document.createElement('td')
tr1.appendChild(td3);
td3.textContent=donar.allDonation[i].amount;

    }
    let h2=document.createElement('h2');
table.appendChild(h2);
calcTotal();
h2.textContent='Total = '+calcTotal(); 
}

function saveToLocalStorage(){
    localStorage.setItem('donerInformation',JSON.stringify(donar.allDonation));

}
function gitFromLocalStorage(){
    if(localStorage.getItem('donerInformation')!==null){
let oldData =JSON.parse(localStorage.getItem('donerInformation'));
for (let i = 0; i < oldData.length; i++) {
    donar.allDonation.push(oldData[i]);
    
}

    }


}
gitFromLocalStorage();

let form=document.getElementById('donarForm');
form.addEventListener('submit',handelspmit);
let donName;
let donAge;
let donAmount;

function handelspmit(event) {
    event.preventDefault();
    donName=event.target.name.value;
    donAmount=event.target.amount.value
    generateAge();
    let newDonar=new donar(donName,donAge,donAmount)
    saveToLocalStorage();
   
    clearTable();
    

    newDonar.render();
    
}


function clearTable() {
    while (table.rows.length>1) {
       table.removeChild(table.lastChild);
                 
    }
  
}
