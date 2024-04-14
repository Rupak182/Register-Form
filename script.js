

let count =0;

let Name;
let email;

let options = [];


let showForm= ()=>{
    let cont = document.querySelector(".contain");
    let boxes = Array.from(cont.children);
    
    // console.log(boxes);
    
    boxes.forEach((box,i)=>{
        if(!box.classList.contains("others"))
        {
            box.classList.add("hidden");
        }
        // console.log("box" ,i)
    })
    
    boxes[count].classList.toggle("hidden");

    let circles= Array.from(document.querySelector(".circles").children);
    console.log();

    circles[count].style.backgroundColor="rgb(132, 94, 238)";
    circles[count].classList.add("outline" ,"outline-[3px]" ,"outline-gray-400")

    if(count-1>=0)
    {
        circles[count-1].classList.remove("outline" ,"outline-[3px]" ,"outline-gray-400")

    }




}

let select = ()=>{
    let buttons= Array.from(document.querySelector(".topic").children);
    console.log("hello");

    buttons.forEach((button)=>{



        button.addEventListener("click",(e)=>{
            e.target.style.color="white";
            e.target.style.backgroundColor="rgb(101, 44, 209)";
            e.target.style.borderColor ="rgb(132, 94, 238)";
            // console.log(button);

            
            let flag=0;
            options.forEach((op)=>{
                if(op===button.innerText)
                {
                    flag=1;
                }
            })


            if(flag==0)
                options.push(button.innerText);

            console.log(options)

        })
    })
}


let steps = ()=>{
    let btns = document.querySelectorAll(".btn");



    btns.forEach((btn,i)=>{
        btn.addEventListener("click",()=>{

            if(count===0)
            {
                Name = document.querySelector(".name").value;
                email =document.querySelector(".email").value

                // console.log(Name);
                // console.log(email);

                let details =document.querySelector(".gen");
                details.querySelector("#name").innerHTML=Name;
                details.querySelector("#email").innerHTML=email;

                // console.log(details.querySelector("#name"));
                // console.log(details.querySelector("#email"));
                
            }



            console.log(count);

            count++;

            if(count===1)
            {
                select();

            }

            if(count==2)
            {
                let list =document.querySelector(".list")

                options.forEach((op)=>{
                    let li= document.createElement("li");
                    li.innerText=op;
                    list.append(li);
                })
            }

            if(count<=2)
            {
                showForm();
            }


        })

    })


}



    


steps();
showForm();