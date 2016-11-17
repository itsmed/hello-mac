import { connect } from 'react-redux';

import Title from '../components/Title.component';
import {
  navigateNext,
  navigatePrevious
} from '../store/actions/navigator.actions';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    currentTask: state.currentTask
  }
}

const mapDispatchToProps = (dispatch) => ({
  onPreviousClick: () => {
    dispatch(navigatePrevious())
  },
  onNextClick: () => {
    dispatch(navigateNext())
  }
});

const TopNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);

export default TopNav;
