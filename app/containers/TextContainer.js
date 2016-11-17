import { connect } from 'react-redux';

import TaskText from '../components/TaskText';

const mapStateToProps = (state) => ({
  currentTask: state.currentTask,
  tasks: state.tasks
});

const TextContainer = connect(
  mapStateToProps
)(TaskText);

export default TextContainer;
