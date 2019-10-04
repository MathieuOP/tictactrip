import { connect } from 'react-redux';
import SuggestionList from '../components/SuggestionList';

// Action Creators
import actions from '../store/actions';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  updateInputStartValue: (city, uniqueName, cityId) => {
    dispatch(actions.updateInputStartValue(city, uniqueName, cityId))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionList);