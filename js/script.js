let input=document.querySelector(".input-list>.input");
input.focus()
console.log(input);
let btn_add=document.querySelector("button")
let btn_remove=document.querySelector(".remove")
let btn_edite=document.querySelector("edite")
let ul = document.querySelector("ul")
console.log(btn_add);
const add_item=()=>{
  //////////////////////////////p
   
  let input_vorodi = input.value;
  let li = document.createElement("li");
  ul.append(li);
  
  let input_read = document.createElement("input")
  
  input_read.setAttribute('readonly', 'readonly');
  input_read.value = input_vorodi; 
  li.append(input_read);
  input_read.focus()
  let div = document.createElement("div");
  li.append(div);
  input.value="" 
  console.log(input_read);
  

  /////////////////////////////////succsus
    let btn_success=document.createElement("button")
    div.append(btn_success)
    let imge_success=document.createElement("img")
    imge_success.src="./imge/icons8-success-64.png" ;
    imge_success.style.width = "27px"; 
    imge_success.style.height = "27px";
    btn_success.append(imge_success)
    btn_success.addEventListener("click",()=>{
        li.classList.add("active")
        input_read.setAttribute('readonly', 'readonly');
         btn_success.style.marginLeft="100px"
        btn_edite.style.display="none"
        btn_remove.style.display="none"

    })
    
    /////////////////////////////////remove
    let btn_remove=document.createElement("button")
    div.append(btn_remove)
    let imge_remove=document.createElement("img")
    imge_remove.src="./imge/1312512_circle_delete_style_trash_remove_icon.png" ;
    imge_remove.style.width = "27px"; 
    imge_remove.style.height = "27px";
    btn_remove.append(imge_remove)
    btn_remove.addEventListener("click",()=>{
        li.classList.toggle("close")
    })
    //////////////////////////edite
    let btn_edite=document.createElement("button")
    div.append(btn_edite)
    let imge_edite=document.createElement("img")
    imge_edite.src="./imge/6334482_draw_edit_heart_line_pencil_icon.png";
    imge_edite.style.width = "27px"; 
    imge_edite.style.height = "27px";
    btn_edite.append(imge_edite)
    
    btn_edite.addEventListener("click",()=>{
         
        input_read.removeAttribute("readonly")
        input_read.focus()
        btn_success.style.marginLeft="100px"
        btn_edite.style.display="none"
        btn_remove.style.display="none"
        p.style.display="none"
        btn_success.style.display="none"

    })   

   
   
}
btn_add.addEventListener("click",add_item)

