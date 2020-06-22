import Cookies from 'universal-cookie';
import axios from 'axios'
import { isLoggedIn } from './UsersDAO';

const cookies = new Cookies();

export const postMessageToOwner = (propertyId, message, callback) => {
    if (!isLoggedIn()) {
        callback(null)
        return;
    }
    fetch(process.env.REACT_APP_BASE_URL + '/v1/chat/' + propertyId, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookies.get("coraltoken")
        },
        method: "POST",
        body: JSON.stringify({message})
    })
        .then(res => res.json())
        .then(data => callback(data))
        .catch(err => {
            console.log("error sending message: ", err.message)
            callback(null);
        });
}

export const postChatMessage = (propertyId, message, to, callback) => {
    if (!isLoggedIn()) {
        callback(null)
        return;
    }
    fetch(process.env.REACT_APP_BASE_URL + '/v1/chat/' + propertyId + '?to=' + to, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookies.get("coraltoken")
        },
        method: "POST",
        body: JSON.stringify({message})
    })
        .then(res => res.json())
        .then(data => callback(data))
        .catch(err => {
            console.log("error sending message: ", err.message)
            callback(null);
        });
}

export const getMessages = (propertyId, to) => {
    let url = process.env.REACT_APP_BASE_URL + "/v1/chat/" + propertyId
    if (to) {
        url += "?with=" + to
    }
    return axios.get(url,
    {
        headers: {
            Authorization: 'Bearer ' + cookies.get("coraltoken")
        }
    })
}

export const getMessageList = (propertyId) => {
    return axios.get(process.env.REACT_APP_BASE_URL + "/v1/chat/" + propertyId + "/chatlist",
    {
        headers: {
            Authorization: 'Bearer ' + cookies.get("coraltoken")
        }
    })
}