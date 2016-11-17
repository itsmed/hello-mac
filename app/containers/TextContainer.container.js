import { connect } from 'react-redux';

import TaskText from '../components/TaskText.component';

const mapStateToProps = (state) => ({
  currentTask: state.currentTask,
  tasks: state.tasks
});

const TextContainer = connect(
  mapStateToProps
)(TaskText);

export default TextContainer;
