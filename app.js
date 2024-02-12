let result = document.getElementById("result");
let btn = document.querySelectorAll(".button");

btn.forEach(btn => {
    btn.addEventListener("click", () => {
        //let clickBtn=document.querySelectorAll()  
        console.log("clickeddd");
        //selects current clicked 
        let current=event.currentTarget;
        let num = event.currentTarget.querySelector("p");
        let a = num.innerText;
        // result.innerText=out;
        console.log(a, "is clicked");
                if(a=="C"){
                    result.innerText="";
                }else{
                    result.innerText=a;
                }


    });
});








// let x=5;
// let b=3;
// let out=x + b;