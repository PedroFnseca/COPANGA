import database from '../database/connection.js'

async function inserValvula(id_valvula, segundos){
    const conn = await database.connect()

    const sql = 'INSERT INTO tbl_valvula(id_valvula, acionado, desligado) value (?, (select now() - interval ? second), (select now()))'
    
    const data = [id_valvula]

    await conn.query(sql, data)

    conn.end()
}

export default {inserValvula}