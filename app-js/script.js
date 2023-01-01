document.getElementById("project").addEventListener("click", function(){
    document.querySelector(".popup-shadow").style.display = "flex";
})

document.querySelector(".close-btn").addEventListener("click", function(){
    document.querySelector(".popup-shadow").style.display = "none";
})
