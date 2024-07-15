const inputBox = document.getElementById("input-box");
const listConstainer = document.getElementById("list-constainer");

function addTask(){
  if(inputBox.value === ''){
    alert("you must write somthing");

  } 
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listConstainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML= "\u00d7";
    li.appendChild(span);
  } 
  inputBox.value="";
  saveData();
}

listConstainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", listConstainer.innerHTML);

}
function showTask(){
    listConstainer.innerHTML = localStorage.getItem("data");
}
showTask();