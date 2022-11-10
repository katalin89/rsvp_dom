
let  btnSubmit=document.querySelector('.submit');

let btnRemove=document.createElement("button");

let listContainer=document.querySelector('.container2');

let inp=document.getElementById('in');

 btnSubmit.addEventListener("click",()=>{
    let sub=createElement(inp.value);
    listContainer.appendChild(sub);
    
 });

//  let btnEdit=document.querySelector('.edit');
//  let changingText=document.querySelector('.name');
 

//  btnEdit.addEventListener("click",()=>{
//     changingText=inp.value;
//     inp.value=" ";
//  });


listContainer.addEventListener("click",(e)=>{
    let ob=e.target;

    if(ob.classList.contains("remove")){
        let div=ob.parentNode.parentNode;
        listContainer.removeChild(div);
    }
})


//sa goleasca cardurile care nu are confirmed
let  checkB=document.querySelector('.view-confirmed');
let checkedCard=document.querySelector('check-confirmed ');

//if(checkB==)

checkB.addEventListener("click",()=>{

    console.log("aici");    

    if (checkB.checked){
        hideUnconfirmed(listContainer.children);
    } else {
        showAll(listContainer.children);
    }

})



//display non

