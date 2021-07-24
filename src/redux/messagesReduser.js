let initialState = {
    collectPeople: [
        {id: 1, name: 'Bulochka'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Tony'},
        {id: 4, name: 'Mashka-Kakashka'}
    ],

    collectMessages: [
        {id: 1, messag: "Hi!"},
        {id: 2, messag: "How are you?"},
        {id: 3, messag: "Are you sleep?"},
        {id: 4, messag: "I am kakashka!"}
    ],

    newMessage: '',
}

const messageReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE': {
            let stateCopy = {...state};
            stateCopy.newMessage = action.messageNewLetters;
            return stateCopy;
        }
        case 'ADD-NEW-MESSAGE': {
            let newItem = {
                id: 5,
                messag: action.textNewMessage
            };
            let stateCopy = {...state};
            stateCopy.collectMessages = [...stateCopy.collectMessages]
            stateCopy.collectMessages.push(newItem);
            stateCopy.newMessage = '';
            return stateCopy;
        }
        default:
            return state;
    }
}
export default messageReduser;
