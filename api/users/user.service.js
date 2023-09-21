const pool = require('../../config/database');

module.exports = {
    create : (data, callBack) => {
        pool.query(
            `insert into registration(fname,lname,gender,email,password, number) values(?,?,?,?,?,?)`,
            [
                data.fname,
                data.lname,
                data.gender,
                data.email,
                data.password,
                data.number            
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
        }
};

