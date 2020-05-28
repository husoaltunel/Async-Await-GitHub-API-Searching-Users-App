class Storage {

    saveUserToStorage(userName) {
        let users = JSON.parse(localStorage.getItem('users'));
        if (users === null) {
            users = [];
        }
        if (users.includes(userName)=== false) {
            users.push(userName);
        }

        localStorage.setItem('users', JSON.stringify(users));

    }


    clearUsersFromStorage() {
        localStorage.removeItem('users');
    }




}
