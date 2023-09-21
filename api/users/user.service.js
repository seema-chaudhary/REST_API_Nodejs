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
        },
        getUsers: callBack => {
            pool.query(
                `select id,fname,lname,gender,email,number from registration`,
                [],
                (error, results, fields) => {
                    if(error){
                        return callBack(error);
                    }
                    return callBack(null, results);
                }
            );
            },
            getUserByUserId: (id, callBack) => {
                pool.query(
                    `select id,fname,lname,gender,email,password,number from registration where id = ?`,
                    [id],
                    (error, results, fields) => {
                        if(error){
                            return callBack(error);
                        }
                        return callBack(null, results);
                    }
                );
            },
            updateUser: (data, callBack) => {
                pool.query(
                    `update registration set fname=?,lname=?,gender=?,email=?,password=?,number=? where id = ?`,
                    [
                        data.fname,
                        data.lname,
                        data.gender,
                        data.email,
                        data.password,
                        data.number,
                        data.id
                    ],
                    (error, results, fields) => {
                        if(error){
                            return callBack(error);
                        }
                        return callBack(null, results);
                    }
                );
                },
                deleteUser: (data, callBack) => {
                    pool.query(
                        `delete from registration where id = ?`,
                        [data.id],
                        (error, results, fields) => {
                            if(error){
                                return callBack(error);
                            }
                            return callBack(null, results);
                        }
                    );
                }
};

