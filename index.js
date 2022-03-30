const boutonPourDesactiver = document.querySelector('.boutonPourDesactiver') ;
const boutonADesactiver = document.querySelector('.boutonADesactiver') ;

boutonPourDesactiver.addEventListener('click', ()=>{

    boutonADesactiver.classList.toggle('desactiver') ;
    boutonPourDesactiver.classList.toggle('boutonAAgrandir') ;
    console.log(boutonPourDesactiver) ;
});


boutonADesactiver.addEventListener('click', ()=>{

    boutonADesactiver.classList.toggle('desactiver') ;
    boutonPourDesactiver.classList.toggle('boutonAAgrandir') ;
    console.log(boutonPourDesactiver) ;
});


const BoutonAChanger = document.getElementById("BoutonAChanger"); 
    
BoutonAChanger.addEventListener('click', ()=>{

    if(BoutonAChanger.type === "submit")
    { 
        BoutonAChanger.type = "text" ;
        BoutonAChanger.classList.toggle('btn') ;
        BoutonAChanger.classList.toggle('btn-secondary') ;
        BoutonAChanger.classList.toggle('rounded-pill') ;
        BoutonAChanger.classList.toggle('changementBoutonEnZone') ;
        BoutonAChanger.classList.toggle('bg-light') ;
        BoutonAChanger.classList.toggle('w-100') ;
        BoutonAChanger.removeAttribute('value') ;
        BoutonAChanger.setAttribute("placeholder" , "Ajouter un texte alt");
    }
});