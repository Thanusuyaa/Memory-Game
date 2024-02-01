const cardsArray =[
   { name:'pizza',
     icon:'<i class="fa-solid fa-pizza-slice"></i>'
   },
   { name:'cat',
   icon:'<i class="fa-solid fa-cat"></i>'
   },
   {name:"feather",
    icon:'<i class="fa-solid fa-feather"></i>'},
   { name:'gift',
   icon:'<i class="fa-solid fa-gift"></i>'
   },
   { name:'crown',
   icon:'<i class="fa-solid fa-crown"></i>'
   },
   { name:'knight',
   icon:'<i class="fa-solid fa-chess-knight"></i>'
   },
   { name:'pizza',
   icon:'<i class="fa-solid fa-pizza-slice"></i>'
},
{ name:'cat',
icon:'<i class="fa-solid fa-cat"></i>'
},
{name:"feather",
    icon:'<i class="fa-solid fa-feather"></i>'},
{ name:'gift',
icon:'<i class="fa-solid fa-gift"></i>'
},
{ name:'crown',
icon:'<i class="fa-solid fa-crown"></i>'
},
{ name:'knight',
icon:'<i class="fa-solid fa-chess-knight"></i>'
},
];
let flippedCards =[];
let matchedPairs=0;
shuffleCards();
const gameBoard = document.getElementById('gameBoard')
displayCards();
function shuffleCards(){
    for(let i=cardsArray.length-1;i>=0;i--){
        const randomIndex = Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randomIndex]] = [cardsArray[randomIndex],cardsArray[i]]
    }
}

function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card = document.createElement('div');
        card.setAttribute('id', index);
        card.classList.add('cardback');
        card.classList.add('active');
        gameBoard.append(card); 
        card.addEventListener('click',flipCard);
    })
}
function flipCard() {
    if(flippedCards.length<2 && this.classList.contains('active')){
    let cardId =this.getAttribute('id');
    flippedCards.push(this);
    this.classList.remove('cardback');
    this.innerHTML= cardsArray[cardId].icon;
    if(flippedCards.length==2){
       setTimeout(checkMatch,1000);
    }   
}
}
function checkMatch(){
    const card1Id= flippedCards[0].getAttribute('id');
    const card2Id= flippedCards[1].getAttribute('id');
    if(cardsArray[card1Id].name===cardsArray[card2Id].name){
        flippedCards[0].style.border="none";
        flippedCards[0].style.backgroundColor= '#F875AA';
        flippedCards[0].innerHTML='';
        flippedCards[0].classList.remove('active');
        flippedCards[1].classList.remove('active');
        flippedCards[1].style.border="none";
        flippedCards[1].style.backgroundColor= '#F875AA';
        flippedCards[1].innerHTML='';
        matchedPairs++;
        checkGameOver();
    } 
    else{
        flippedCards[0].innerHTML="";
        flippedCards[0].classList.add('cardback');
        flippedCards[1].innerHTML="";
        flippedCards[1].classList.add('cardback');
    }
    flippedCards=[];
}
function checkGameOver(){
    if(matchedPairs == cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML = 'YOU WON';
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');

    }
}








