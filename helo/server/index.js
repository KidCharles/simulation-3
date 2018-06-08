require('dotenv').config()
const express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , ctrl = require('./ctrl')
//this is middleware that checks if the user has a session on it, if not assigns one
const checkUserSession = require('./middleware/checkUserSession')


const {
    CONNECTION_STRING,
    SESSION_SECRET,
} = process.env

const app = express()
app.use(bodyParser.json())
massive(CONNECTION_STRING).then(db => app.set('db', db))

app.use(cors())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(checkUserSession);
app.use(passport.initialize());
passport.use(new Auth0Strategy({
            domain: DOMAIN,
            clientID: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            // callbackURL: CALLBACK_URL,
            scope: "openid profile"
        }, (accessToken, refreshToken, extraParams, profile, done) => {
            //query our db here
            const db = app.get("db");
            let { id, username, password, profile_pic } = profile;
            db.find_user([id]).then(user => {
                //data will always be returned in an array
                if (user[0]) {
                    done(null, user[0].id);
                } else {
                    db.create_user([username, password, profile_pic]).then((createdUser) => {
                        done(null, createdUser[0].id)
                    })
                }
            });
        }
    )
);

// app.get('/api/houses', ctrl.getHouses)
// app.delete('/api/houses/:id', ctrl.deleteHouse)
app.post('/login', ctrl.loginUser)
app.post('/register', ctrl.registerUser)



const port = 3030
app.listen(port, () => console.log(`server is Glistening on port ${port}`))