export const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL : 'http://localhost:3000';

const checkResponse = (res) => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Код ошибки: ${res.status}`);
}

export const register = ({ name, email, password }) => {

    return fetch(`${url}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify({ name, email, password }),
            credentials: 'include'

    })
    .then((res) => checkResponse(res));
        
};

export const authorize = ({ email, password }) => {

    return fetch(`${url}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify({ email, password }),
            credentials: 'include'
    })
    .then((res) => checkResponse(res));
}

export const getContent = (token) => {
    return fetch(`${url}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    })
        .then((res) => {
            return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            return data;
        })
        .catch(console.error)
}