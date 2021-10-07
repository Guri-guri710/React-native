const API = 'http://192.168.1.52:3000/tasks'; //poner la direccion ip

export const getTasks = async () => {
    const res = await fetch(API);
    return await res.json();
}


     