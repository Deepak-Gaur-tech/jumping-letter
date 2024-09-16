let span=document.querySelectorAll("span")

span.forEach((items)=>{
    items.addEventListener("click",()=>{
        items.classList.toggle("active")
    })
})