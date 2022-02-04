//Objeto com os dados 
const linksSocialMedia = {
    github: `https://github.com/LuisLoschi`,
    facebook: `https://www.facebook.com/luis.loschi`,
    instagram: `https://www.instagram.com/luisloschi_/`,
    linkedin: `https://www.linkedin.com/in/luis-loschi`
}
 

function changeSocialMediaLinks() {
    //children acessa as tags dentro dela
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');

        //Pega o link e substitui com os dados do objeto
        li.children[0].href = `${linksSocialMedia[social]}`
    }
}

//Consumir API
function getGitHubProfileInfo(){
    const url = `https://api.github.com/users/LuisLoschi`

    fetch(url) //fetch vai na url e traz a resposta, então a promise fala se a resposta deu certo ou falhou. 
    .then(response => response.json() ) //Transforma a resposta em JSON e armazena a resposta em formato json(data).
    .then(data =>  {
        userName.textContent = data.name;
        userBio.textContent = data.bio;
        userLinkProfile.href = data.html_url;
        userImage.src = data.avatar_url;
        userLogin.textContent = data.login;
    })    

}

changeSocialMediaLinks()
getGitHubProfileInfo()

