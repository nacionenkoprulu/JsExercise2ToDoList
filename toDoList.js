ulDOM = document.querySelector("#list")
inputDOM =document.querySelector("#task")

btnDOM = document.querySelector("#liveToastBtn")

let x = `<span class="close">&times;</span>`

let toDO = document.querySelector("#formInput")
toDO.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault()
}

function newElement() {

    if(!inputDOM.value){
        console.log("boş giriş yapamazsınız!")
    } else {

        liDOM = document.createElement("li")
        liDOM.innerHTML = `${inputDOM.value} ${x}`
        ulDOM.appendChild(liDOM)
    }
    inputDOM.value = ""

}

ulDOM.addEventListener('click' , function(e){
    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked")

    } else if(e.target.className === "close")
        e.target.parentElement.remove()
},false )