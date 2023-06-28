const titulo_principal = document.querySelectorAll("h1")
const esconde_titulo = document.querySelector("#esconde_titulo")



const toggleHide = () => {

    titulo_principal.classList.add('hide');

};


esconde_titulo.addEventListener('click', () => toggleHide())
