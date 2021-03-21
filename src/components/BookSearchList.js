import React from 'react'
import Book from "./Book";

export default ({books, refresh}) => {
    const renderBook = (b) => {
        return <Book book={b}
                     onShelfChange={() => {
                         refresh();
                     }}/>
    }

    return <div className="list-books-content">
        <div className="bookshelf">
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(b => {
                        return <li key={b.id}>
                            {renderBook(b)}
                        </li>
                    })}
                </ol>
            </div>
        </div>
    </div>
}