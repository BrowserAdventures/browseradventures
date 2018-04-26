import {database, db_bookPage} from '../../../../firebase'

export const add_description=(id, description)=>
{
    return dispatch => {
        db_bookPage.ref(id).push(description)

        dispatch({type: 'SUBMIT'})
    }
}

// export const get_books=()=>
// {
//     return dispatch => database.on('value', (snapshot)=> {
//         let books = snapshot.val();
//         let booksArray = [];
//         for (let self in books) {
//             booksArray.push({
//                 id: self,
//                 title: books[self].title,
//                 url: books[self].url
//             });
//         }
//         dispatch({
//             type: 'GET_BOOKS',
//             books: booksArray
//         })
//     })
//
// }
