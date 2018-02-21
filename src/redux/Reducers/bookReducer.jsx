const axios = require('axios');

// const onFooterClick = 'ON_FOOTER_CLICK';
// const onClickEditReducer = 'ON_CLICK_EDIT_REDUCER';
// const onSaveEventReducer = 'ON_SAVE_EVENT_REDUCER';
const setData = 'SET_DATA';


const defaultValue = {
  books: [],
  page: false,
  // noteid: 0,
};

const bookReducer = (prevState = defaultValue, action) => {
  switch (action.type) {
    case setData: {
      console.log('here');
      // Send a POST request
      axios({
        method: 'post',
        url: '/storingBooks',
      });
      return {
        ...prevState,
        page: true,
      };
    }


    default: {
      return prevState;
    }
  }
};
export default bookReducer;

