//alert("hello");
let cl = console.log;

const alllinks = [...document.querySelectorAll('.tabHeading a')];

const cards = [...document.querySelectorAll('.card')]

cl(alllinks);







alllinks.forEach(ele =>{
    ele.addEventListener('click',(eve) =>{
     let li = eve.target;
     let getId = li.getAttribute('data-id');
     cards.forEach(card => card.classList.remove('active'));
     cl(getId);
     document.getElementById(getId).classList.add('active')
     

     alllinks.forEach(a => a.classList.remove('active'))

     li.classList.add('active')
    })
    
    
});