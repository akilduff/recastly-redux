import React from 'react';
import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

var mapStateToProps = (state) => ({});

var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (query) => {
    dispatch(handleVideoSearch(query));
  }
});

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.

export default SearchContainer;
