import axios from 'axios';

const dataURI = 'http://localhost:3001/persons';

const loadStartData = () => {
    let req = axios.get(dataURI)
    return req
            .then(res => res.data)
            .catch(err => console.log("ERROR: ", err))
}

const addPerson = (person) => {
    let req = axios.post(dataURI, person)
    return req
            .then(res => res.data)
            .catch(err => console.log("ERROR: ", err))
}

export default {loadStartData, addPerson}