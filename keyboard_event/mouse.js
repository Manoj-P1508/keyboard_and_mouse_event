//mouse event
const mybox=document.getElementById("mybox");
const mybutton=document.getElementById("mybutton");

// mybox.addEventListener("click",event=>{
//     event.target.style.backgroundClor="tomato";
//     event.target.textContent="OUCH! 😭"
// });

// mybox.addEventListener("mouseover",event=>{
//     event.target.style.backgroundClor="yellow";
//     event.target.textContent="Don't do it🤨"
// });

// mybox.addEventListener("mouseout",event=>{
//     event.target.style.backgroundClor="lightgreen";
//     event.target.textContent="click me😎"
// });

mybutton.addEventListener("click",event=>{
    mybox.style.backgroundColor="tomato";
    mybox.textContent="OUCH! 😭"
});

mybutton.addEventListener("mouseover",event=>{
    mybox.style.backgroundColor="yellow";
    mybox.textContent="Don't do it🤨"
});

mybutton.addEventListener("mouseout",event=>{
    mybox.style.backgroundColor="lightgreen";
    mybox.textContent="click me😎"
});


//key events
const mybox1=document.getElementById("mybox1");
const moveAmount=10;
let x=0;
let y=0;

document.addEventListener("keydown",event=>{
    mybox1.style.backgroundColor="tomato";
    mybox1.textContent="😫";
});


document.addEventListener("keyup",event=>{
    mybox1.style.backgroundColor="lightgreen";
    mybox1.textContent="😎"
});


document.addEventListener("keydown",event=>{
    mybox1.style.backgroundColor="tomato";
    mybox1.textContent="😫";
    console.log(event.key);
    
    if(event.key.startsWith("Arrow")){
        event.preventDefault();

        switch(event.key)
        {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        mybox1.style.top=`${y}px`;
        mybox1.style.left=`${x}px`;
    }
});