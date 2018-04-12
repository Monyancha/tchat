import { connect } from 'react-redux';
import React from 'react';
import Messaging from './messaging';
import { selectMessagethreads } from '../../reducers/selectors';
import { requestMessages, requestMessagethreads} from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  // messages: selectMessages(state),
  messagethreads: selectMessagethreads(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    requestMessages: () => dispatch(requestMessages()),
    requestMessagethreads: () => dispatch(requestMessagethreads())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messaging);
