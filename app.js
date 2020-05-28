var githubName = document.getElementById('githubName');
var form = document.getElementById('github-form');
var ulLastUsers = document.getElementById('last-users');
var btnClearSearches = document.getElementById('clear-last-searches');
var profileDiv = document.getElementById('profile');
var divRepos = document.getElementById('repos');
var searchDiv = document.querySelector('.search');



const user = new Users();
const ui = new UI;
const storage = new Storage();

eventListeners();

function eventListeners() {

    form.addEventListener('submit', getUser);
    document.addEventListener('DOMContentLoaded', function (e) {
        ui.getLastUserSearchs();
        e.preventDefault();
    })
    btnClearSearches.addEventListener('click', clearSearches);

}

function getUser(e) {

    if (githubName.value === "") {
        ui.displayMessages('Lütfen bir kullanıcı adı giriniz.', 'alert alert-warning')
    }
    else {
        user.getData(githubName.value).then(data => {
            if (data.response.message === "Not Found" || data.response.name === null) {
                ui.displayMessages('Böyle bir kullanıcı bulunamadı.', 'alert alert-danger');
            }
            else {
                ui.getProfile(data.response);
                ui.getUserRepos(data.repos);
                storage.saveUserToStorage(data.response.name);
                ui.getLastUserSearchs();
            }
        }).catch(err => {
            ui.displayMessages(err, 'alert alert-danger');
        });
    }
    ui.clearInput();

    e.preventDefault();
}

function clearSearches() {
    if(JSON.parse(localStorage.getItem('users')) !== null){
        if (confirm('Silmek istediğinize emin misiniz ?')) {
            ui.clearSearchesUI();
            storage.clearUsersFromStorage();
        }
    }
    

}