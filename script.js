var username = "";
var cards = document.querySelector('.cards')

function getUsername(element) {
    username = element.value;
    console.log(username);
}

async function search() {
    var response = await fetch('https://api.github.com/users/'+ username )
    var coderData = await response.json();
    console.log(coderData);
    cards.innerHTML = cardsDiv(coderData);
}
function cardsDiv(data) {
    if (data.login != undefined){
        return `<div class="card">
                <img src="${data.avatar_url}"  alt="${data.login}">
                <h1 class="green-text">Username: ${data.login}</h1>
                <p>Type: ${data.type} </p>
                </div>`
    }
    else return `<p class='red'> There is no such username in GitHub </p>`
}

