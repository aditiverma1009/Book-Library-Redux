import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import React from 'react';
import './App.css';
import BookDisplay from '../BookDisplay/BookDisplay';
import { onSync } from '../../redux/Actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // const books = this.props.books.slice();
    // const booklist = this.props.books.map((step, index) => (
    //   <div className="App-Container">
    //     <div className="App-Blocker">
    //       <BookDisplay
    //         bookTitle={booklist[index].bookTitle}
    //         bookAuthor={booklist[index].bookAuthor}
    //         bookRating={booklist[index].bookRating}
    //         bookLike={booklist[index].bookLike}
    //       />
    //     </div>
    //   </div>
    // ));


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
//   onClickEditHere: key => dispatch(onClickEditReducer(key)),
//   onFooterClickHere: () => dispatch(onFooterClick()),
});

export default connect(mapStateToProps, mapDispatcherToProps)(App);


App.propTypes = {
//   textNoteHeading: PropTypes.string.isRequired,
//   onChangeNoteTitle: PropTypes.func.isRequired,
//   valueNoteTitle: PropTypes.string.isRequired,
  onSync: PropTypes.func.isRequired,
//   valueNote: PropTypes.string.isRequired,
//   alertBool: PropTypes.bool.isRequired,
};
