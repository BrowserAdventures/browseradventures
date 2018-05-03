const initialState =
{
    background: 'rgba(255,255,255, 0.7)',
}

const homePageReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case('BACKGROUND'):
        return{
            ...state,
        }

        case('BLUE'):
        return{
            background: 'rgba(75, 140, 200, 0.7)',
        }

        default: return state;
    }
}





export default homePageReducer;
