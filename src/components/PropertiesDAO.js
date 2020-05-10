
import Cookies from 'universal-cookie';

export const getProperty = (id, callback) => {
    fetch("http://localhost:3000/v1/properties/" + id)
    .then(response => response.json())
    .then(response => {
        console.log("getProperty - got response: ", response)
        callback(response);
    })
    .catch(error => {
        console.log('getProperty - there has been a problem fetching: ' + error.message)
        throw error;
    });
}

export const login = (username, password, callback) => {
    console.log("logging in user: ", username);
    fetch('http://localhost:3000/v1/users/login', {
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

    fetch('http://localhost:3000/v1/users/signup', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
                username: username, 
                password: password})
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
    fetch("http://localhost:3000/v1/users/")
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
