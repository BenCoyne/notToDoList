const {Client} = require('pg')

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  database: 'nottodo',
  password: 'password',
  port: 3001,
})

client.connect();

client.query(`Select * from ntds`, (err, res)=>{
  if(!err){
    console.log(res.rows)
  }else{
    console.log(err.message)
  }
  client
})
