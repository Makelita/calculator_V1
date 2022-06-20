let calcButtons = document.querySelector(".calc_num")
// console.log(calcButtons)
let calcOperator = document.querySelector(".calc_operator")
let clearBtn = document.querySelector("#clear")
let movie = document.querySelector(".calc_screen")
let total = document.querySelector("#equal")

let collect1 = ""
let collect2 = ""
let operation =""

// movie.innerText = "0"


calcButtons.addEventListener("click", function(e){

    if ( e.target.id != "clear" && e.target.id != "equal" && !operation){
        collect1 += e.target.id
        movie.innerText = collect1
        collect1 = Number(collect1)
    }
    return; 

})

calcOperator.addEventListener("click", function(e){
    if(operation === ''){
        operation += e.target.id
        movie.innerText = e.target.id
    }
    
})

calcButtons.addEventListener("click", function(e){

    if ( e.target.id != "clear" &&  e.target.id != "equal" && operation){
        collect2 += e.target.id
        movie.innerText = collect2
        collect2 = Number(collect2)
        console.log(collect1, operation, collect2)
    }  
    })

    function clearOperation (event){
        collect1 = ""
        collect2 = ""
        operation = ""
        movie.innerText = 0
        console.log(event)
    
    }

clearBtn.addEventListener("click",clearOperation)



total.addEventListener("click", function(){
    
    let solutionNum;

    if (operation === "+"){
        solutionNum = collect1 + collect2  
    } else if (operation === "-"){
        solutionNum = collect1 - collect2   
    }else if (operation === "*") {
        solutionNum = collect1 * collect2
    }else if ( operation === "/"){
        solutionNum = collect1 / collect2
    }
    movie.innerText = solutionNum
    collect1 = solutionNum
    collect2 = ""
    operation = ""


})