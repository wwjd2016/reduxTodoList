import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions/index.js';

const FilterTodos = ({visibilityFilter, dispatch}) => {
  return (
    <div>
      Show:
      {
        ['SHOW_ALL', 'SHOW_COMPLETE', 'SHOW_ACTIVITY'].map(item => {
          return visibilityFilter === item ?
            <span key={item} style={{marginRight: 20}} >{item}</span> :
            <a
              key={item}
              href="javascript:void(0)"
              onClick={()=> dispatch(setFilter(item))}
              style={{marginRight: 20}}
            >{item}</a>
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(mapStateToProps)(FilterTodos);
