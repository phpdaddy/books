import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
import BookShelves from "../components/BookShelves";
import * as BooksAPI from "../BooksAPI";

export default () => {
    let history = useHistory();


    const [books, setBooks] = useState([]);

    const refresh = async () => {
        const bs = await BooksAPI.getAll();
        setBooks(bs);
    }

    useEffect(() => {
        refresh();
    }, []);

    return <div className="app">

        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <BookShelves books={books} refresh={() => refresh()}/>
            <div className="open-search">
                <button onClick={() => history.push('/search')}>Add a book</button>
            </div>
        </div>
    </div>
}