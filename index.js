
const db = require('./db');
const mongoSql = require('mongo-sql'); 
const path2json = require('./path2json');
const arrOfJson = require(path2json);

let TableName = 'electors';

function insertXls(arrayOfObject) {
    
        for (let item of arrayOfObject) {
            const { query, values } = mongoSql.sql({
                type: 'insert',
                table: TableName,
                values: item
            });
            console.log(query, values);
    
            // db.query(query, values).then(({ rows }) => rows);
            db.query(query, values, (err, res) =>{
                if(err) console.log('ERROR ' + values[0]);
                if(res) console.log('SUCCESS ID ' + values[0] );
            });
        }
}

insertXls(arrOfJson);


  


