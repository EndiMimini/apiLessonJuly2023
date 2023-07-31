var username = "";
var cards = document.querySelector('.cards')

function getUsername(element) {
    username = element.value;
}



async function search() {
    var response = await fetch('https://api.github.com/users/'+ username )
    response = await response.json();
    cards.innerHTML = resultsDiv(response);
}



function resultsDiv(personiQeKerkojme) {
    if (personiQeKerkojme != undefined){
        return `<div class="card">
                <img src="${personiQeKerkojme.avatar_url}"  alt="${personiQeKerkojme.login}">
                <h1 class="green-text">Username: ${personiQeKerkojme.login}</h1>
                <p>Type: ${personiQeKerkojme.type} </p>
                <p>Public Repositories: ${personiQeKerkojme.public_repos}</p>
                <p>Followers: ${personiQeKerkojme.followers} </p>
                </div>`
    }
    else return `<p class='red'> There is no such username in GitHub with this username yet </p>`
}

