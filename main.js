document.addEventListener('DOMContentLoaded', function() {
    const nameE = document.querySelector('#name');
    const usernameE = document.querySelector('#username');
    const avatarE = document.querySelector('#avatar');
    const reopsE = document.querySelector('#repos');
    const followingE = document.querySelector('#following');
    const followersE = document.querySelector('#followers');
    const linkE = document.querySelector('#link');
    
    fetch('https://api.github.com/users/goorilas')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        nameE.innerText = json.name;
        usernameE.innerText = json.login;
        avatarE.src = json.avatar_url;
        followingE.innerText = json.following;
        followersE.innerText = json.followers;
        reopsE.innerText = json.public_repos;
        linkE.href = json.html_url;
    })
    .catch(function(erro) {
        alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde")
    })
})
