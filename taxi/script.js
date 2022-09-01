let button = document.querySelector(".button")
let input = document.querySelector(".input")
let taxi = document.querySelector("body > div > div > div.taxi")
let del = document.querySelector(".delete")


let arr = []
for( let i = 0; i < 100; i += 1) {
arr.push(i)
}

button.onclick = function () {
   
    arr.push(input.value)
    isAddLocal()
    input.value = " ";
    location.reload()
}

function isAddLocal () {
    for( let i = 1; i<arr.length; i += 1) {
        if (localStorage.getItem(arr[i]) === null) {
            localStorage.setItem(arr[i], input.value);
            break;
        } else {
            continue;
        }
    }
    
 }
 
 let keys = Object.keys(localStorage);
            for(let key of keys) {
               
                if ( key === key.substr(0,5)) {

              taxi.innerHTML += `<div class="car ${key}"><br>Маршрутка ${localStorage.getItem(key) }</br><p class="score ${key}"></p></div>`;
            }
        }
            
let cars = document.querySelectorAll(".car")   

for (let car of cars) {

car.addEventListener("click", function(obj){ 
    let target = obj.target.lastElementChild.className
  console.log(target);

    for (let  i = 1; i <= cars.length; i++) {
        let sk = `score ${i}`;
        if(sk == target) {
            let coun = localStorage.getItem(`score ${i}`)
            if(coun === null) {
                coun = 1;
                localStorage.setItem(`score ${i}`, coun)
            } else { 
                 coun = localStorage.getItem(`score ${i}`)
                let numcoun = +coun;
                numcoun += 1;
                localStorage.setItem(`score ${i}`, numcoun)
            }
            
            
            obj.target.lastElementChild.textContent = localStorage.getItem(`score ${i}`)
            
            
            
        }

    }})}


del.onclick = function() {
    localStorage.clear();
    location.reload()
}








