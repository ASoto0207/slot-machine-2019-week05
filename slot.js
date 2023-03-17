
let balance=1500
let bet;
let currentBalance=balance;
let images =['<img src=bug.png>', '<img src=fer.logo.jpg>', '<img src=lambo.png>', '<img src=mercedes-benz.png>', '<img src=lisaloser.jpg>']
let reel1= document.querySelector('.pic1');
let reel2= document.querySelector('.pic2');
let reel3= document.querySelector('.pic3');



let bets = document.querySelector('#bet')
let amount =document.querySelector('#balance')
document.querySelector('#betMin').addEventListener('click' , but1)
document.querySelector('#betMax').addEventListener('click' , but2)
document.querySelector('#spin').addEventListener('click', spinny)
document.querySelector('#reset').addEventListener('click' , reset)

function but1(){
    bet = 50
    console.log(bet)
    bets.innerHTML= bet
    
}
function but2(){
    bet = 100
    console.log(bet)
    bets.innerHTML= bet
}
function reset(){
    bet = 0;
    balance=1500;
    console.log(bet);
    bets.textContent= bet;
    amount.textContent= balance;
}
function spinny(){
    let spot1= Math.floor(Math.random()*5)
    let spot2= Math.floor(Math.random()*5)
    let spot3= Math.floor(Math.random()*5)
    reel1.innerHTML= images [spot1]
    reel2.innerHTML= images [spot2]
    reel3.innerHTML= images [spot3]
    if(spot1===spot2&&spot3===spot1 ){
        balance+=(bet*10)
        document.querySelector('#balance').innerText="Current Balance" + balance 
    }
    
    else if(spot3===3 || spot2===3 || spot1===3){
        balance -=(50)
        document.querySelector ('#balance').innerText="Current Balance" + balance
    }
        else{
            balance-=(bet)
           // balance=balance-(bet)
           document.querySelector('#balance').innerText=balance 
    }
    
    youWentBroke()
   
}

function youWentBroke(){
    if(balance <= 0){
        alert("YOU DONT GET A CAR PLAYA!!")
    }
    
  
}
