import mysql from 'mysql2';

const pool = mysql.createPool({
     host: '127.0.0.1', // sempre vai ser o etapa da maquina z
     user: 'root',
     password: 'senac@02',
     database: 'lais'
}).promise();

const result = await pool.query("select *from `sakila`.`category` where `name` = 'Music';"); 
console.log(result);