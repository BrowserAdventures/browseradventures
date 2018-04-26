const initialState =
{
    description: '',
    descriptions: [],
}

const bookPageReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case('DESCRIPTION'):
        return{
            ...state,
            description: action.description
        }

        case('SUBMIT'):
        return{
            ...state,
            description: '',
        }

        case('GET_DESCRIPTIONS'):
        return{
            ...state,
            books: action.books
        }

        default: return state;
    }
}





export default bookPageReducer;
