
// sol 1
/*
const pq1 = document.querySelectorAll(".paragraph");
pq1.forEach((change) => {
    change.innerText = "Paragraph updated using JS";
    change.style.backgroundColor = "#0a2855";
    change.style.color = "white";
});

*/

// sol 2

/*
const pq2 = document.querySelector("#username");
pq2.innerText = "Kaushik K";
pq2.style.fontSize = "45px";

*/

// sol 3
const pq3 = document.querySelectorAll(".block");
pq3.forEach((paraM)=>{
console.log(paraM.tagName);
paraM.children[0].innerText = "chnged child element";
console.log(paraM.children[0].innerText);

});



