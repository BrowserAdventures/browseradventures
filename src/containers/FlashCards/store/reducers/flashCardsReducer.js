const initialState =
{
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
        {
            title: 'forEach()',
            question: 'what does the forEach() method do?',
            answer: 'executes a provided function once for each array element.'
        },
        {
            title: 'indexOf()',
            question: 'what does the indexOf() method do?',
            answer: 'returns the first index at which a given element can be found in the array, or -1 if it is not present.'
        },
        {
            title: 'splice()',
            question: 'what does the splice() method do?',
            answer: 'changes the contents of an array by removing existing elements and/or adding new elements.'
        },
        {
            title: 'join()',
            question: 'what does the join() method do?',
            answer: 'joins all elements of an array (or an array-like object) into a string and returns this string.'
        },
        {
            title: 'Callback function',
            question: 'what is a Callback function?',
            answer: 'a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.'
        },
    ],
    current: {},
    answers: [],
    test: ''
}

const flashCardsReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case('GET_CARD'):
            var cards = [...action.cards]
            var setCurrent = cards[Math.floor(Math.random()*cards.length)]

            var randomAnswers = cards.filter(self=> self !== setCurrent)
            var newAnswers = randomAnswers.splice(randomAnswers.length-2)

        return{
            ...state,
            current: setCurrent,
            answers: newAnswers.concat(setCurrent),
        }

        case('NEXT'):
            var randomCard = action.cards.filter(self=> self !== action.current)
            //var answers = randomCard.filter(self=> self !== self.title || self.question)
            var filterAnswers = action.cards.filter(self=> self !== action.current)
            var Answer1 = {...filterAnswers[Math.floor(Math.random()*filterAnswers.length)]}

            var filterAnswer2 = action.cards.filter(self=> self !== Answer1 && self !== action.current)
            var Answer2 = {...filterAnswer2[Math.floor(Math.random()*filterAnswer2.length)]}

            var mergeAnswers = [...action.current]


            var updateAnswers = filterAnswers.splice(filterAnswers.length-2)

        return{
            ...state,
            current: randomCard[Math.floor(Math.random()*randomCard.length)],
            answers: mergeAnswers,
            test: mergeAnswers,
        }

        default: return state;
    }
}





export default flashCardsReducer;
