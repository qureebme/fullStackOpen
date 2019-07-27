import axios from 'axios';

const dataURI = 'http://localhost:3001/persons/';

const loadStartData = () => {
    let req = axios.get(dataURI)
    return req
}

const addPerson = (person) => {
    let req = axios.post(dataURI, person)
    return req
}

const deleteContact = (person) => {
    let req = axios.delete(dataURI + person.id)
    return req
}

export default {loadStartData, addPerson, deleteContact}