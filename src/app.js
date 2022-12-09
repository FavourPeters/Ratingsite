let list = document.querySelector("#container"),
    submit = document.querySelector("#submit"),
    lis = document.querySelectorAll("li"),
    board = document.querySelector(".board"),
    thanks = document.querySelector(".tpage"),
    rate = document.getElementById("rate");

//init the number chosen

submit.addEventListener('click', sNum);
// list.addEventListener('click', listNumbers);

// function listNumbers(e){
//    val = e.target.value
//    msg(`the ${val}`)
// }
// function msg(theMessage){
//     document.getElementById("conta").textContent='hwyhello world';
// }
// // val = 'hello world'
// // function sNum(){
// //     conta.textContent = val;
// // }
let rating = '';

lis.forEach( (li) => {
    li.addEventListener('click', function(e){
    rating = li.value;
    rate.innerText = rating 
    })
})
function sNum(){
    board.style.display = 'none'
    thanks.classList.remove('hidden')
}

lis.forEach( (li) => {
    li.addEventListener('click', function(){
        removeActive();
        li.classList.add('active');
    })
});

function removeActive(){
    lis.forEach(function(li){
        li.classList.remove('active')
    })
};




