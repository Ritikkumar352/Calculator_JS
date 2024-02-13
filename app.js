let result = document.getElementById("result");
let btn = document.querySelectorAll(".button");
let inp=document.getElementById("input");
let input=[];
let i=0;

// inp.addEventListener("click",()=>{
//     console.log("clicked input");
// })

btn.forEach(btn => {
    btn.addEventListener("click", () => {
        //selects current clicked 
        let current = event.currentTarget;
        let num = event.currentTarget.querySelector("p");
        let a = num.innerText;
        //click action
        console.log(a);
        
        if(a=="C"){
            result.innerHTML="";
            inp.innerText="";
            input="";
        }else if(a!="="){
            input+=a;
            inp.innerText=input;
            i++;
        }else{   // = is clicked 
            let parts = input.split(/(\+|\-|\*|\/)/);
            let num1=parseInt(parts[0]);
            let opn=(parts[1]);
            let num2=parseInt(parts[2]);
            console.log(num1+" " +num2+" "+opn);
        }

    });
});


