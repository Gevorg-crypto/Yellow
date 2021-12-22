const baseUrl = 'https://jogtracker.herokuapp.com/api/v1/';

export const handlerGetToken = () => {
    const data = {
        uuid: 'hello'
    }
    return fetch(`${baseUrl}/auth/uuidLogin`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((resp) => resp.json())
}
export const handlerGetJogs = () => {
   return  fetch(`${baseUrl}/data/sync`, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer '+ localStorage.getItem('token')
        },
    }).then((resp) => resp.json())
}
export const handlerAddJog = (values:{distance:number,time:number,date:string}) => {
    return  fetch(`${baseUrl}/data/jog`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer '+ localStorage.getItem('token')
        },
        body:JSON.stringify(values)
    }).then((resp) => resp.json()).catch(reason => {
        console.log(reason)
    })
}