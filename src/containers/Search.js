import { connect } from 'react-redux';
import Search from '../components/Search';

// Action Creators
import actions from '../store/actions';

const mapStateToProps = state => ({
  inputStartValue: state.inputStartValue,
  inputArrivedValue: state.inputArrivedValue,
  suggestionsCities: state.suggestionsCities,
  suggestionPopularCities: state.suggestionPopularCities,
  heightArrow: state.heightArrow,
  inputStartIsFocus: state.inputStartIsFocus,
  searchIsActive: state.searchIsActive,
});

const mapDispatchToProps = dispatch => ({
    onChangeInputStart: (value) => {
      dispatch(actions.onChangeInputStart(value))
    },
    onChangeInputArrived: (value) => {
      dispatch(actions.onChangeInputArrived(value))
    },
    focusInputStart: (heightArrow) => {
      dispatch(actions.focusInputStart(heightArrow))
    },
    focusInputArrived: (heightArrow) => {
      dispatch(actions.focusInputArrived(heightArrow))
    },
    getPopularCities: () => {
      dispatch(actions.getPopularCities());
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);