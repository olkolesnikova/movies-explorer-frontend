class MainApi {

    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
        this.authorization = config.headers.authorization;
    }

    request(url, options) {
        return fetch(url, options)
            .then(this.handleResponse)
    }

    getUserInfo() {

        return this.request(`${this.url}/users/me`, { headers: this.headers, credentials: 'include' })

    }

    updateUserInfo(data) {

        return this.request(`${this.url}/users/me`, {

            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email
            }),
            credentials: 'include'
        })
    }

    signOut() {

        return this.request(`${this.url}/signout`, {

            method: 'GET',
            headers: this.headers,
            credentials: 'include'
        })
    }

    handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка ${res.status}`);
        }
    }
}

export const mainApi = new MainApi({
    url: 'http://localhost:3000',
    credentials: 'include',
    headers: {
        'Content-type': 'application/json'
    }
})