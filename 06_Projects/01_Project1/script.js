const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");

buttons.forEach(function(bt){
    console.log(bt);
    bt.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='Grey'){
            body.style.backgroundColor = e.target.id;
            alert(`Your Bakgroud IMAGE has to be change as: ${e.target.id}`)
        }
        if(e.target.id==='White'){
            body.style.backgroundColor = e.target.id;
            alert(`Request to change background Color as :-> ${e.target.id}`)
        }
        if(e.target.id==='Blue'){
            body.style.backgroundColor = e.target.id;
            alert(`Request to change background Color as :-> ${e.target.id}`)
        }
        if(e.target.id==='Yellow'){
            body.style.backgroundColor = e.target.id;
            alert(`Request to change background Color as :-> ${e.target.id}`)
        }
        if(e.target.id==='Red'){
            body.style.backgroundColor = e.target.id;
            alert(`Request to change background Color as :-> ${e.target.id}`)
        }
    })
});