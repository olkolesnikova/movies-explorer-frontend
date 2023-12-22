class MoviesApi {

    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
        
    }

    async request(url, options) {
        const res = await fetch(url, options);
        return this.handleResponse(res);
    }

    getMovies() {
        return this.request(this.url, { headers: this.headers })
    }

    

    handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка ${res.status}`);
        }
    }
}

export const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    /* credentials: 'include',
    headers: {
        'Content-type': 'application/json'
    } */
})