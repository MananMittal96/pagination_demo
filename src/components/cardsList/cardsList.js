import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Cards } from '../cards';
import { Pagination } from '../pagination';
import { getCardList } from './actions/cardlistAction';

const CardsList = (props) => {

  const {card_list, getCardList} = props;

  const [loading, setLoading] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [cardsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true)
    getCardList();    // Action Call
    setLoading(false)
  }, []);

  const lastPostKey = currentPageNumber * cardsPerPage;  //key of the last card of the page
  const firstPostKey = lastPostKey - cardsPerPage;     // key of the firsta card of the page
  const currentCards = card_list.card_list.slice(firstPostKey, lastPostKey);  //current displayed cards on the screen

  const totalRecords = card_list && card_list.card_list.length   //to calculate the total no of records from the API
  const totalPages = Math.ceil(totalRecords / cardsPerPage)    //to calculate the total no of pages needed in pagination
  let pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const changePageNumber = (page) => {
    setCurrentPageNumber(page)
  };
  
    return (
        <div className='main-container'
          style={{
            marginLeft: "50px"
            }}>
          <h1>Pagination DEMO</h1>
          <Cards cards={currentCards} loading={loading} />    {/* Component to display cards */}
          <Pagination
            numbers={pageNumbers}
            paginate={changePageNumber}
          />                             {/* Component for pagination */}
        </div>
      );
};

export const mapStateToProps = (state) => {
  return {
    card_list: state.card_list,
  }
}

export default connect(mapStateToProps, {
  getCardList
})(CardsList);