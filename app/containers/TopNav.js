import { connect } from 'react-redux';

import Title from '../components/Title';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    currentTask: state.currentTask
  }
}

const TopNav = connect(
  mapStateToProps
)(Title);

export default TopNav;
