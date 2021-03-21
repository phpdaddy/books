import React, {useState} from "react";
import {update} from "../BooksAPI";

export default ({book, onShelfChange}) => {
    const [shelf, setShelf] = useState(book.shelf);

    return <div className="book">
        <div className="book-top">
            <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage: book && book.imageLinks ?
                        `url("${book.imageLinks.thumbnail}")` : 'initial',
                }}
            />
            <div className="book-shelf-changer">
                <select value={shelf} onChange={(event) => {
                    setShelf(event.target.value);
                    update(book.id, event.target.value);
                    onShelfChange();
                }}>
                    <option value="move" disabled>
                        Move to...
                    </option>
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors[0]}</div>
    </div>
}