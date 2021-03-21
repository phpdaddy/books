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
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(b => b.shelf === 'currentlyReading').map(b => {
                        return <li key={b.id}>
                            {renderBook(b)}
                        </li>
                    })}
                </ol>
            </div>
        </div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(b => b.shelf === 'wantToRead').map(b => {
                        return <li key={b.id}>
                            {renderBook(b)}
                        </li>
                    })}
                </ol>
            </div>
        </div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(b => b.shelf === 'read').map(b => {
                        return <li key={b.id}>
                            {renderBook(b)}
                        </li>
                    })}
                </ol>
            </div>
        </div>
    </div>
}