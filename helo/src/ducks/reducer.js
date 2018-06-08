// 1.) INITIAL STATE
const initial_state = {
    username: '',
    profile_pic: '',
    userId: 0,
    img:'',
    title:'',
    content:''
}

// 2.) CONST VARIABLES
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const UPDATE_USER_PIC = 'UPDATE_USER_INFO';
// const UPDATE_USER_ID = 'UPDATE_USER_INFO';
const CLEAR_USER_INFO = 'CLEAR_USER_INFO';


// 3.) REDUCER FUNCTION
export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return Object.assign({}, state, { username: action.payload.username, profile_pic: action.payload.profile_pic, userId: action.payload.userId  })
        default:
            return state;
    }
}




// 4.) ACTION CREATORS
export function addUser(user) {
    return {
        type: UPDATE_USER_INFO,
        payload: user
    }
}