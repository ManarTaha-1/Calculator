let clac = document.getElementsByClassName("clac");
let output = document.getElementById("output");
let clear = document.getElementById("clear");

function writeNumbers (e) {
    output.textContent += e.target.textContent;
}
for (let i = 0; i < clac.length; i++) {
    clac[i].addEventListener("click", writeNumbers);
}

function clearAll () {
    output.textContent = '';
}

function calculate (){
    try {
        let expression = output.textContent
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        let result = eval(expression);
        output.textContent = result;
    } catch {
        output.textContent = "Error";
    }
}


