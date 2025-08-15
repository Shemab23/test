import db from './connection.js'

const testDB = async () => {
    try{
        const [rows] = await db.execute(`SELECT * FROM user`);
        if(rows.length > 0){
            console.log(rows);
        }else{
            console.log(`no data`);
        }
    }catch(err){
        console.log(`Err: ${err.message}`);
    }
}

testDB();
