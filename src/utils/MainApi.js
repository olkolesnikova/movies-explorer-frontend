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

    updateUserInfo({ name, email }) {

        return this.request(`${this.url}/users/me`, {

            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                email: email,
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

    saveMovie(data) {

        return this.request(`${this.url}/movies`, {

            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            }),
            credentials: 'include'
        })

    }

    deleteMovie(id) {

        return this.request(`${this.url}/movies/${id}`, {

            method: 'DELETE',
            headers: this.headers,
            credentials: 'include',
            body: JSON.stringify({ id })
        })
    }

    getSavedMovies() {

        return this.request(`${this.url}/movies`, {
            method: 'GET'
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
    url: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL : 'http://localhost:3000',
    credentials: 'include',
    headers: {
        'Content-type': 'application/json'
    }
})