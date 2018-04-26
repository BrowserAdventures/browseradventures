import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCd98mrLdOF10yhO9TWBGauyzzXe10XelM",
  authDomain: "browseradventures-picturebook.firebaseapp.com",
  databaseURL: "https://browseradventures-picturebook.firebaseio.com",
  projectId: "browseradventures-picturebook",
  storageBucket: "browseradventures-picturebook.appspot.com",
  messagingSenderId: "939533735198"
}
firebase.initializeApp(config);

export const database = firebase.database().ref('/picturebooks')


export const db_book=(id)=>
{
    return firebase.database().ref(`/picturebooks/${id}`)
}

export const db_bookDescription=(book, description)=>
{
    return firebase.database().ref(`/picturebooks/${book}/${description}`)
}
