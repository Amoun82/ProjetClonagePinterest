
const eltCrees = document.getElementById('eltCrees') ;
const eltEnregistrer = document.getElementById('eltEnregistrer') ;
let test = false ;


eltCrees.addEventListener('click', ()=>{

    if(test === false)
    {
        test = true ;
        eltCrees.classList.toggle("simulationBtn") ;
        eltCrees.classList.toggle("ecritureSousLignÃ©") ;
        const divAFaireDisparaitre = document.getElementById('divAFaireDisparaitre') ;
        const divAFaireApparaitre = document.getElementById('divAFaireApparaitre') ;
        
        divAFaireDisparaitre.classList.toggle("desactiver") ;
        divAFaireDisparaitre.classList.toggle("align-items-center") ;
        divAFaireDisparaitre.classList.toggle("flex-column") ;
        divAFaireDisparaitre.classList.toggle("d-flex") ;

        divAFaireApparaitre.classList.toggle("desactiver") ;
        divAFaireApparaitre.classList.toggle("align-items-center") ;
        divAFaireApparaitre.classList.toggle("flex-column") ;
        divAFaireApparaitre.classList.toggle("d-flex") ;
            
        eltEnregistrer.classList.toggle("simulationBtn") ;
        eltEnregistrer.classList.toggle("ecritureSousLignÃ©") ;
    }

});


eltEnregistrer.addEventListener('click', ()=>{

    if(test === true)
    {
        test = false ;
        eltCrees.classList.toggle("simulationBtn") ;
        eltCrees.classList.toggle("ecritureSousLignÃ©") ;
        const divAFaireDisparaitre = document.getElementById('divAFaireDisparaitre') ;
        const divAFaireApparaitre = document.getElementById('divAFaireApparaitre') ;
        
        divAFaireDisparaitre.classList.toggle("desactiver") ;
        divAFaireDisparaitre.classList.toggle("align-items-center") ;
        divAFaireDisparaitre.classList.toggle("flex-column") ;
        divAFaireDisparaitre.classList.toggle("d-flex") ;

        divAFaireApparaitre.classList.toggle("desactiver") ;
        divAFaireApparaitre.classList.toggle("align-items-center") ;
        divAFaireApparaitre.classList.toggle("flex-column") ;
        divAFaireApparaitre.classList.toggle("d-flex") ;
        
        eltEnregistrer.classList.toggle("simulationBtn") ;
        eltEnregistrer.classList.toggle("ecritureSousLignÃ©") ;
    }

});