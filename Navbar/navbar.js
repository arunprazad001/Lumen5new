// let butt=document.getElementById("learn_hero");
    const list= document.getElementById("learn_div")

    const button_cr=document.getElementById("create");
    const list_cr= document.getElementById("create_list")

    list.style.display="none"
    list_cr.style.display="none"

    button.addEventListener("click",function() {
        if (list.style.display== "none"){
        list.style.display="block";
    }
    else{
        list.style.display="none"
    }
    })

    button_cr.addEventListener("click",(event_cr)=> {
        if (list_cr.style.display=="none"){
        list_cr.style.display="block";
    }
    else{
        list_cr.style.display="none"
    }
    })

