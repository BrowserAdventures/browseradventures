const initialState =
{
    current: {},
    cards: [
        {
            title: 'reduce()',
            question: 'what does the reduce() method do?',
            answer: 'applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.',
        },
        {
            title: 'map()',
            question: 'what does the map() method do?',
            answer: 'creates a new array with the results of calling a provided function on every element in the calling array.',
        },
        {
            title: 'filter()',
            question: 'what does the filter() method do?',
            answer: 'creates a new array with all elements that pass the test implemented by the provided function.'
        },
    ],
}

const flashCardsReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case('NEXT'):
            const card = [...state.cards]
            card[Math.floor(Math.random()*card.length)]
        return{
            ...state,
            current: card,
        }

        default: return state;
    }
}





export default flashCardsReducer;
