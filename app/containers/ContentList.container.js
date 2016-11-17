import { connect } from 'react-redux';

import TableOfContents from '../components/TableOfContents.component';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    currentTask: state.currentTask
  }
};

const ContentList = connect(
  mapStateToProps
)(TableOfContents);

export default ContentList;
