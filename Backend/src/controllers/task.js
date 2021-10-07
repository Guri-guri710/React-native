import { connet } from '../database';

export const getTasks = async (req, res) => {
       const connection = await connet();
       const [rows] = await connection.query('SELECT * FROM tasks');
       console.log(rows);
       res.json(rows);
}
      


export const getTask = async (req, res) => {
        const connection = await connet();
        const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", 
        [
                req.params.id
        ]);
        console.log(rows[0]);
        res.json(rows[0]);
}

export const getTaskCount = async (req, res) => {
        const connection = await connet();
        const [rows] = await connection.query('SELECT COUNT(*) FROM tasks');
        res.json(rows[0]["count(*)"]);

}

export const createTask = async (req, res) => {
        const connection = await connet();
        await connection.query('INSERT INTO tasks(title, description) VALUES(?,?)', [
                req.body.title,
                req.body.description
        ]);
        console.log({
                id: results.insertId,
                ...req.body
        })
}

export const deleteTask = async (req, res) => {

       const connection = await connet();
       await connection.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
       res.sendStatus(204)

}

export const updateTask = async (req, res) => {
        const connection = await connet();
        await connection.query("UPDATE FROM tasks SET ? WHERE id = ?", [
                req.body, 
                req.params.id
        ]);
        res.sendStatus(204)

}