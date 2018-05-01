const initialState =
{
    temperature: '',
    city: 'Miami',
    country: 'US',
    humidity: '',
    description: '',
    showWeather: true,
    coord: {
        lat: 25.77, lon: -80.19
    },
}

const weatherMapReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case('GET_CARD'):
        return{
            ...state,

        }

        default: return state;
    }
}





export default weatherMapReducer;
