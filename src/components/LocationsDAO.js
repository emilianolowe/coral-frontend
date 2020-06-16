
export const getPlaces = (address, callback) => {
    
    fetch(process.env.REACT_APP_BASE_URL + "/v1/locations?address=" + address)
    .then(response => response.json())
    .then(response => {
        console.log("getPlaces - got response: ", response)
        callback(response);
    })
    .catch(error => {
        console.log('getPlaces - there has been a problem fetching: ' + error.message)
        throw error;
    });
}

export const getPlace = (placeId, callback) => {
    
    fetch(process.env.REACT_APP_BASE_URL + "/v1/locations/" + placeId)
    .then(response => response.json())
    .then(response => {
        console.log("getPlace - got response: ", response)
        callback(response);
    })
    .catch(error => {
        console.log('getPlace - there has been a problem fetching: ' + error.message)
        throw error;
    });
}
