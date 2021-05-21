

const gUser = {
    name: "Ochoa Hyde",
    coins: 100,
    moves: [
        {
            toId: "5a56640269f44f479000j222",
            to: "Dylan Long",
            at: 2652712571,
            amount: 2 
        }
    ]
}


function getUser(){
    //const user = gUsers.filter(user => user._id === userId);
    return gUser;
}

function signup(name){
    if(name === gUser.name){
        console.log('exict')
    } else {
        console.log('its not')
    }
}
// function addMove(contact, amount)

export const userService = {
    getUser,
    signup
}