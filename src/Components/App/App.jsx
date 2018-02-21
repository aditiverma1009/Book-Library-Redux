import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import React from 'react';
import './App.css';
import BookDisplay from '../BookDisplay/BookDisplay';
import { onSync, onFetch } from '../../redux/Actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.onFetch();
  }

  const onFetch=() => {
    axios.get( '/fetchFromDb')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const books = this.props.books.slice();
    const booklist = this.props.books.map((step, index) => (
      <div className="App-Container">
        <div className="App-Blocker">
          <BookDisplay
            bookTitle={booklist[index].bookTitle}
            bookAuthor={booklist[index].bookAuthor}
            bookRating={booklist[index].bookRating}
            bookLike={booklist[index].bookLike}
          />
        </div>
      </div>
    ));


    if (this.props.page === true) {
      return (
        <div className="App-Body">
          <div className="App-Header" />
          <div className="App-Sidebar" />
          {/*
          <div>{booklist}</div> */}
        </div>
      );
    } else if (this.props.page === false) {
      return (
        <div className="App-Body">
          <div className="App-Header"><p className="HeaderText">The <span className="bookCap">Book</span> Shelf</p></div>
          <div className="App-Sidebar" />
          <div className="LoadBox">
            <p className="textLoadBox">Oops! No books found!</p>
            <p className="textLoadBox">Import them now ?</p>
            <button className="btnLoadBox" onClick={() => this.props.onSync()}>SYNC</button>
          </div>
        </div>
      );
    }
  }
}


const mapStateToProps = state => ({

  page: state.bookReducer.page,
  books: state.bookReducer.bookks,
//   bookid: state.noteReducer.bookid,
});

const mapDispatcherToProps = dispatch => ({
  onSync: () => dispatch(onSync()),
//   onFetch: () => dispatch(onFetch()),
});

export default connect(mapStateToProps, mapDispatcherToProps)(App);


App.propTypes = {

  onSync: PropTypes.func.isRequired,
  onFetch: PropTypes.func.isRequired,
//   valueNote: PropTypes.string.isRequired,
//   alertBool: PropTypes.bool.isRequired,
};
