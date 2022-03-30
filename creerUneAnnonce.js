let test = false ;
const boutonCompte = document.getElementById('boutonCompte') ;
const boutonPartage = document.getElementById('boutonPartage')


boutonPartage.addEventListener('click', ()=>{

    if(test === false)
    {
        test = true ;
        
        boutonCompte.classList.toggle('fondMenuPseudoClair') ;
        boutonCompte.classList.toggle('fondMenuPseudoSombre') ;
        boutonPartage.classList.toggle('fondMenuPseudoClair') ;
        boutonPartage.classList.toggle('fondMenuPseudoSombre') ;
        const menuPseudoPremier = document.getElementById('menuPseudoPremier') ;
        const menuPseudoSecond = document.getElementById('menuPseudoSecond') ;
        menuPseudoPremier.classList.toggle('desactiver') ;
        menuPseudoSecond.classList.toggle('desactiver') ;

    }

});

boutonCompte.addEventListener('click', ()=>{

    if(test === true)
    {
        test = false ;
        
        boutonPartage.classList.toggle('fondMenuPseudoClair') ;
        boutonPartage.classList.toggle('fondMenuPseudoSombre') ;
        boutonCompte.classList.toggle('fondMenuPseudoClair') ;
        boutonCompte.classList.toggle('fondMenuPseudoSombre') ;
        const menuPseudoPremier = document.getElementById('menuPseudoPremier') ;
        const menuPseudoSecond = document.getElementById('menuPseudoSecond') ;
        menuPseudoPremier.classList.toggle('desactiver') ;
        menuPseudoSecond.classList.toggle('desactiver') ;
        
    }

});