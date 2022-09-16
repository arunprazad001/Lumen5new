let month = document.querySelector('.toggle .month');
let year = document.querySelector('.toggle .year');
let monthAmount = document.querySelectorAll('.box-container .box .month');
let yearAmount = document.querySelectorAll('.box-container .box .year');

year.onclick = () =>{
    year.classList.add('active');
    month.classList.remove('active');

    monthAmount.forEach(mo =>{ mo.style.display = 'none' });
    yearAmount.forEach(yr =>{ yr.style.display = 'block' });
};

month.onclick = () =>{
    year.classList.remove('active');
    month.classList.add('active');

    monthAmount.forEach(mo =>{ mo.style.display = 'block' });
    yearAmount.forEach(yr =>{ yr.style.display = 'none' });
};


let scroll = document.getElementById("compare_plan");

scroll.onclick = ()=>{
    window.scrollTo(0,2300);
}


// Local storage - storing price for cart page

let click = document.getElementById("click");

let price = {
    value : document.getElementById("value").innerText
}

click.onclick = () =>{
    localStorage.setItem("price" , JSON.stringify(price));
}



