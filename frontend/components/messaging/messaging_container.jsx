import { connect } from 'react-redux';
import React from 'react';
import Messaging from './messaging';
import { selectMessages, selectMessagethreads } from '../../reducers/selectors';
import { requestMessages, requestMessagethreads, postNewMessage} from '../../actions/message_actions';
import {receiveCurrentMessagethreadId} from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  messages: selectMessages(state),
  messagethreads: selectMessagethreads(state),
  currentUser: state.session.currentUser,
  currentMessagethread: state.messagethreads[state.ui.currentMessagethread],
  sender_id: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => {
  return {
    requestMessages: () => dispatch(requestMessages()),
    requestMessagethreads: () => dispatch(requestMessagethreads()),
    receiveCurrentMessagethreadId: () => dispatch(receiveCurrentMessagethreadId()),
    postNewMessage: (message) => dispatch(postNewMessage(message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messaging);
