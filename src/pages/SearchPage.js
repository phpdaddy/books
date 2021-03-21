import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import {search} from "../BooksAPI";
import BookSearchList from "../components/BookSearchList";

export default () => {
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState("");


    const refresh = async (value) => {
        const bs = await search(value || "");
        if (bs && !bs.error) {
            setBooks(bs ? bs : []);
        } else {
            setBooks([]);
        }

    }

    let history = useHistory();

    return <div className="search-books">
        <div className="search-books-bar">
            <button
                className="close-search"
                onClick={() => history.push('/')}>
                Close
            </button>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(event) => {
                    setFilter(event.target.value);
                    refresh(event.target.value);
                }}/>
            </div>
        </div>
        <div className="search-books-results">
            <BookSearchList books={books} refresh={() => refresh(filter)}/>
        </div>
    </div>
}