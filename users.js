class Users {
    constructor (response,repos) {
        
        this.response = response;
        this.repos = repos;
        
    }

    async getData(githubName) {

        const resp = await fetch(`https://api.github.com/users/${githubName}`);
        const response = await resp.json();

        const rep = await fetch(`https://api.github.com/users/${githubName}/repos`);
        const repos = await rep.json();

        const user = new Users(response,repos);
        return user;
        
    }

}