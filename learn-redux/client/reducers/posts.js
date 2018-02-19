// a reducer takes in two things:

// 1. action ( what happend)
// 2. copy of current state

function posts(state = [], action) {
    if (action.type === 'INCREMENTS_LIKES') {
        console.log('post will change');
        console.log(state, action);
    }
    return state;
}

export default posts;