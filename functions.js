function createElement(text) {
    let div=document.createElement("div");
  
  div.classList.add("card");

  div.innerHTML = `
            <h1 class="name"  >${text}</h1>
            <div class ="confirmed">
                <p class="conf">Confirmed</p>
                <input type="checkbox" class="check-confirmed">
            </div>
           
            <div class="buttons">
                <button class="edit">edit</button>
                <button class="remove">remove</button>
            </div>
       
`;

  return div;
}



//Apelare: listaDeCopii(listContainer.children)
function hideUnconfirmed(arr){
    for(let i=0;i<arr.length;i++){
        let child=arr[i].querySelector('.check-confirmed');
        if(!child.checked){
              console.log(child);
           arr[i].style.display="none";
        }
    }
           //console.log(arr[i].querySelector(".check-confirmed"))
}

//showAll(listContainer.children)
function showAll(arr){
    console.log("test");
    for(let i=0;i<arr.length;i++){
        let child=arr[i].querySelector('.check-confirmed');
        console.log("test2");    
       // let child=arr[i].querySelector('.check-confirmed');
        console.log(child);
        arr[i].style.display="inline-block";
    }
}

