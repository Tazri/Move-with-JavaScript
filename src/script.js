//Item
let moveDivOne = document.getElementById('move-div');
let moveDivTwo = document.getElementById('move-div-two');
let btnLeft = document.getElementById('left-btn');
let btnRight = document.getElementById('right-btn');
let btnUp = document.getElementById('up-btn');
let btnDown = document.getElementById('Down');
//End Item

//moving logic
let moveDiv = moveDivOne;
moveDivOne.style.transition = 'all 0.4s linear'
moveDivTwo.style.transition = 'all 0.4s linear'
moveDivOne.style.borderTopRightRadius = '50%';

//select logic


moveDivOne.addEventListener('click',function(event){
    if(moveDivOne.style.borderTopRightRadius == '50%'){

    }else{
        moveDivOne.style.borderTopRightRadius = '50%';
        moveDivTwo.style.borderTopRightRadius = '0%'

        moveDiv = moveDivOne;
    }
})

moveDivTwo.addEventListener('click',function(event){
    if(moveDivTwo.style.borderTopRightRadius == '50%'){

    }else{
        moveDivTwo.style.borderTopRightRadius = '50%'
        moveDivOne.style.borderTopRightRadius = '0%'
        moveDiv = moveDivTwo;
    }
})



//select logic 



//end moving logic



//transform axix x and y

let x = 0;
let y = 0;

//end transform axix x and y


//logic

moveDiv.style.transition = 'all 0.4s linear'

//work with x axix
btnRight.addEventListener('click',function(event){
    x = x + 100;
    moveDiv.style.transform = `translate(${x}%,${y}%)`
})

btnLeft.addEventListener('click',function(event){
    if(x == 0){
        x = 0;
    }else{
        x = x - 100;
    }
    moveDiv.style.transform = `translate(${x}%,${y}%)`
})
//end with x axix

//work with y axix
btnDown.addEventListener('click',function(event){
    y = y + 100;
    moveDiv.style.transform = `translate(${x}%,${y}%)`
})

btnUp.addEventListener('click',function(event){
    if(y == 0){
        y = 0;
    }else{
        y = y - 100;
    }
    moveDiv.style.transform = `translate(${x}%,${y}%)`
})
