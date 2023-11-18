

let gameSeq=[];
let userSeq=[];

let allbtns = ["btn-1","btn-2","btn-3","btn-4"];

let started  = false;

let level = 0;
//When user press on start button
let startBtn =  document.querySelector('#start');
startBtn.addEventListener( "click" , function(){
    if(started == false){
        console.log("Game is Started");
        started=true;
        
        
        levelUp();
    }
} )
//when User click On Exit Button
let endBtn =  document.querySelector('#end');
endBtn.addEventListener( "click" , function(){
    h2.innerHTML=`Game Over! Press any key to start and You Current Score is <b>${5*level}<b> points`;
} )

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout( function(){
        btn.classList.remove('flash');
    } , 150);

}


let h2 =document.querySelector("h2");
function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`You are At Level ${level}`;


    //hamara game abb koi bhi random button generate karega aur usse as a 
    //parameter hamare btnFlash name ke function mai btn argument mai pass kar dega 

    let randomidx = Math.floor(Math.random() *3);
    console.log(randomidx);

    let rdbtname = allbtns[randomidx];
    //aab hamme iss random button name ko proper ek button ki form mai access karna hai
    console.log(rdbtname);
    let randomBtn = document.querySelector(`.${rdbtname}`);

    gameSeq.push(rdbtname); //This statement indicates the adding of 
    //that button which generates randomly in starting/initially/beginning 
    
    console.log(gameSeq); 


    btnFlash(randomBtn);


}

function checkSequence(idx){
    // let idx = level-1; fixed value of level
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
    }

    else{
        h2.innerHTML=`Game Over! Press on start button to Play again and Your Current Score is <b>${5*(level-1)}<b> points`;
        
        reset();
        
        }
}





function userClick(){
    btn=this;
    btnFlash(btn);

    
    userbtn = btn.getAttribute('id');
    userSeq.push(userbtn);
    console.log(userSeq);

    checkSequence(userSeq.length-1);
}


let allBtns = document.querySelectorAll('.btn-container div');

for (btn of allBtns){
    btn.addEventListener('click' , userClick);

}

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;

}
