import {database} from '../../../../firebase'

export const add_book=(book)=>
{
    return dispatch => {
        database.push(book)

        dispatch({type: 'SUBMIT'})
    }
}

export const get_books=()=>
{
    return dispatch => database.on('value', (snapshot)=> {
        let books = snapshot.val();
        let booksArray = [];
        for (let self in books) {
            booksArray.push({
                id: self,
                title: books[self].title,
                url: books[self].url
            });
        }
        dispatch({
            type: 'GET_BOOKS',
            books: booksArray
        })
    })

}
