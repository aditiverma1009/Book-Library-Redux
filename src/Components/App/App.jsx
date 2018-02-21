import React from 'react';
import './App.css';

import BookDisplay from '../BookDisplay/BookDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const books = this.props.books.slice();
    const booklist = books.map((step, index) => (
      <div className="App-Container">
        <div className="App-Blocker">
          {/* <BookDisplay
            bookTitle={booklist[index].bookTitle}
            bookAuthor={booklist[index].bookAuthor}
            bookRating={booklist[index].bookRating}
            bookLike={booklist[index].bookLike}
          /> */}
        </div>
      </div>
    ));


    if (1) {
      return (
        <div className="App-Body">
          <div className="App-Header" />
          <div className="App-Sidebar" />
          {/*
          <div>{booklist}</div> */}
        </div>
      );
    }
  }
}

export default App;
