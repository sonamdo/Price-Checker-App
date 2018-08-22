import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const Search = (props) => (
        <div>
            <form className ="search">
              <input
                type = "text"
                placeholder = "Type product name"
                value = {props.filters.text}
                onChange = {(e) => {//e is input text value
                  props.dispatch(setTextFilter(e.target.value));
                  console.log(e.target.value)
                }}
              />
            </form>
        </div>
);

const mapStateToProps = (state) => {
  return {
    filters : state.filters
  }
}

export default connect(mapStateToProps)(Search);//connecting component to store via connect() function
