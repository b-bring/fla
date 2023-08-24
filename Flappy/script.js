let brid = document.querySelector(".brid")
let hole = document.querySelector (".hole")
let obstacle = document.querySelector(".obstacle")
let interval;
let jumb =false;


// left && top 








// generate random space

const space= ()=>{
    let Randomnumer = Math.floor(Math.random() * 500);
    hole.style.top = `${Randomnumer}px`
}


hole.addEventListener("animationiteration" , ()=>{
    space()
    let obstacleleft = parseInt(getComputedStyle(obstacle).getPropertyValue("left"));
    console.log(obstacleleft)
})

// **************************************



setInterval (()=>{
        let bridTop = parseInt(getComputedStyle(brid).getPropertyValue("top"));
    let obstacleTop = parseInt(getComputedStyle(obstacle).getPropertyValue("top"));
    let obstacleleft = parseInt(getComputedStyle(obstacle).getPropertyValue("left"));
    let holetop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
    if(!jumb){
        let newJumb = bridTop + 5;
brid.style.top = `${newJumb}px`
    }  

    if(bridTop > 600 || (obstacleleft < 20 && (bridTop > holetop +150 || bridTop < holetop))){
        alert("")
        location.reload()
    }
},10)






document.addEventListener("keydown" , (e)=>{
    if(e.key === " "){
     jumb = true;
     let timerplayer = 0;
     let interval = setInterval(()=>{
    timerplayer++;
    let bridTop = parseInt(getComputedStyle(brid).getPropertyValue("top"));
        if(bridTop > 0 && timerplayer < 15){
            brid.style.top=`${bridTop - 5}px`;
        }

        if(timerplayer>20){
            clearInterval(interval)
            jumb=false;
            timerplayer =0;
        }

     },10)




    }
})




// game over


// setInterval(()=>{

//         let bridTop = parseInt(getComputedStyle(brid).getPropertyValue("top"));
//     let obstacleTop = parseInt(getComputedStyle(obstacle).getPropertyValue("top"));
//     let obstacleleft = parseInt(getComputedStyle(obstacle).getPropertyValue("left"));
//     let holetop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
//     if(bridTop > 600 || (obstacleleft < 20 && (bridTop > holetop +150 || bridTop < holetop))){
//         console.log("A")
//         alert()
//         location.reload()
//     }
// },1)































