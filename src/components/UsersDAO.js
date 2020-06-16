import Cookies from 'universal-cookie'
import axios from 'axios'

// transform from Promise/Callback to Async/Await now
export const getUser = id => {
    return axios.get(process.env.REACT_APP_BASE_URL + "/v1/users/" + id)
    //.then(response => response.json())
}

export const setUser = user => {
    return axios.post(process.env.REACT_APP_BASE_URL + "/v1/users/" + user._id)

}

export const login = (username, password, callback) => {
    console.log("logging in user: ", username);
    fetch(process.env.REACT_APP_BASE_URL + '/v1/users/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(
            {
                username: username,
                password: password
            })
    })
        .then(res => res.json())
        .then((data) => {
            if (data.success) {
                const cookies = new Cookies();
                cookies.set('coraltoken', data.token, { path: '/' });
                cookies.set('coraluser', username, { path: '/' });
                callback(true);
            }
        })
        .catch((err) => {
            console.log("error loggin in: ", err.message)
            callback(false);
        });
}

export const signup = (username, password, callback) => {
    console.log("signing up  user: ", username);

    fetch(process.env.REACT_APP_BASE_URL + '/v1/users/signup', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(res => res.json())
        .then((data) => {
            if (data.err) {
                throw new Error(data.err.message)
            }
            if (data.success) {
                callback(true);
            }
        })
        .catch((err) => {
            console.log("error loggin in: ", err.message)
            callback(false);
        });
}

export const getUserId = (userEmail, callback) => {
    fetch(process.env.REACT_APP_BASE_URL + "/v1/users/")
        .then(response => response.json())
        .then(response => {
            console.log("getUserId - got response: ", response);
            const theUserArr = response.filter(elem => elem.username === userEmail);
            if (theUserArr.length > 0) {
                callback(theUserArr[0]);
            } else {
                callback(null);
            }
        })
        .catch(error => {
            console.log('getUserId - there has been a problem fetching: ' + error.message)
            throw error;
        });
}

export const saveProperty = (property, callback) => {
    let url = process.env.REACT_APP_BASE_URL + "/v1/properties/";
    let method = "POST";
    if (property._id) {
        // property already exists.
        // CALL PUT instead of POST
        url += property._id;
        method = "PUT";
    }

    const cookies = new Cookies();
    console.log(`about to ${method} endpoint: `, url);
    const body = JSON.stringify(property);
    console.log("sending: ", body);

    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookies.get("coraltoken")
        },
        method: method,
        body: body
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            callback({ status: "NOK", message: "Error" })
        })
        .then(property => {
            if (property) {
                console.log("Property saved Successfully! returning id: " + property._id);
                callback({ status: "OK", id: property._id })
            }
        })
        .catch(err => {
            console.log(err.message);
            callback({ status: "NOK", message: "Error" })
        });

}
