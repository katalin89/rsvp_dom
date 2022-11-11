
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
    }s

})

let btnEdit=document.querySelector('.edit');



listContainer.addEventListener("click",(e)=>{
    let ob=e.target;
    if(ob.classList.contains("edit")){

        let card=ob.parentNode.parentNode;
        let text =ob.parentNode.parentNode.children[0].textContent;

        let inpt = document.createElement("input");
        inpt.type="text";
        inpt.value=text;
        let children=card.children[0]
        card.insertBefore(inpt,children);
        card.removeChild(children);
        //console.log(document.getElementsByTagName('h1'));
        
        ob.textContent="save";

        ob.classList.remove("edit");

        ob.classList.add("save");
    }else if(ob.classList.contains("save")){

        let card=ob.parentNode.parentNode;
        let text =ob.parentNode.parentNode.children[0].value;

        let h1 = document.createElement("h1");
        h1.textContent=text;

        let children=card.children[0]
        card.insertBefore(h1,children);
        card.removeChild(children);
        //console.log(document.getElementsByTagName('h1'));
        
        ob.textContent="edit";

        ob.classList.remove("save");

        ob.classList.add("edit");
    }
});





