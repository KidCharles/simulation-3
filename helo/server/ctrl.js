// const bcrypt = require('bcryptjs')
var session_id_count = 1

module.exports = {

    registerUser: (req, res) => {
        console.log('hey')
        const { username, password } = req.body
        const db = req.app.get('db')
        db.checkUsername([username]).then(user => {
            console.log(user)
            if (user.length !== 0) {
                res.status(200).send('Username Taken. Try another.')
            } else {
                db.registerUser([username, password]).then((user) => {
                    req.session.user.session_id = session_id_count
                    session_id_count++
                    req.session.user.user_id = user[0].user_id
                    req.session.user.username = user[0].username
                    console.log('registered: ', req.session)
                    res.status(200).send()
                })
            }
        })
    },


    loginUser: (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        db.checkUsername([username]).then(user => {
            if (user.length !== 0) {
                if (password == user[0].password ) {
                    req.session.user.session_id = session_id_count
                    session_id_count++
                    req.session.user.user_id = user[0].user_id
                    req.session.user.username = user[0].username
                    res.status(200).send()
                } else {
                    res.status(200).send('Invalid Password')
                }
            } else {
                res.status(200).send('Username does not exist')
            }
        })
    },



}