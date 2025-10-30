
const button = document.getElementById('btn')

button.addEventListener("click", doSomething)

function doSomething(){
    alert("Review Box to indicate your experience at Selve Restaurant!")
}

const myBtn = document.getElementById('btn-2');

myBtn.addEventListener("click", function(e) {
    const name = prompt("Name for your Reservation?");

    document.body.innerHTML = "<p>Welcome, " + name + "!</p>";
});

