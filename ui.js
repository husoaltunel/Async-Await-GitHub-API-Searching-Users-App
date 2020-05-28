class UI {

    

    getProfile(data) {
        profileDiv.firstChild.remove();
        var profileCard = document.createElement('div');
        profileCard.setAttribute('class','card card-body mb-3');
        profileDiv.appendChild(profileCard);
        profileCard.innerHTML = `<div class="row">
       <div class="col-md-4">
            <a href="${data.html_url}" target="_blank">
                 <img class="img-fluid mb-2" src="${data.avatar_url}">
            </a>
               <hr>
             <div id="fullName"><strong>${data.name}</strong></div>
             <hr>
             <div id="bio">${data.bio}</div>
         </div>
         <div class="col-md-8">
             <button class="btn btn-secondary">
                 Followers <span class="badge badge-light">${data.followers}</span>
             </button>
             <button class="btn btn-info">
                 Following <span class="badge badge-light">${data.following}</span>
             </button>
             <button class="btn btn-danger">
                 Repos <span class="badge badge-light">${data.public_repos}</span>
             </button>
             <hr>
             <li class="list-group">
             <li class="list-group-item borderzero">
                 <img src="images/company.png" width="30px"> <span id="company">${data.company}</span>

             </li>
             <li class="list-group-item borderzero">
                 <img src="images/location.png" width="30px"> <span id="location">${data.location}</a>

             </li>
             <li class="list-group-item borderzero">
                 <img src="images/mail.png" width="30px"> <span id="company">${data.email}</span>

             </li>

         </div>


     </div>
     </div>`
    }

    getUserRepos(repos){
        divRepos.innerHTML = "";
        repos.forEach(repo => {

            divRepos.innerHTML += `<div class="mb-2 card-body">
            <div class="row">
        <div class="col-md-2">
            <a href="${repo.html_url}" target="_blank" id="repoName">${repo.name}</a>
        </div>
        <div class="col-md-6">
            <button class="btn btn-secondary">
                Stars <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
            </button>

            <button class="btn btn-info">
                Forks <span class="badge badge-light" id="repoFork">${repo.forks_count}</span>
            </button>

        </div>
     </div> 
     </div>`

        });

    }

    clearInput() {
        githubName.value = "";
    }

    getLastUserSearchs() {
        ulLastUsers.innerHTML = "";
        const users = JSON.parse(localStorage.getItem('users'));
        if(users !== null){
            users.forEach(user => {
                let li = document.createElement('li');
                li.className = 'list-group-item';
                ulLastUsers.appendChild(li);
                li.textContent = user;
    
            });
        }
    }

    clearSearchesUI() {

        while(ulLastUsers.firstElementChild !== null){
            ulLastUsers.firstElementChild.remove();
        }
    }

    displayMessages(err,alertClass) {
        let div = document.createElement('div');
        div.textContent = err;
        div.className = alertClass;
        searchDiv.appendChild(div);
        setTimeout(function(){
            div.remove();
        },2000)
    }
}