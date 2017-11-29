import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CommentsForm from './comments_form';
import { createComment } from '../../actions/comments';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createComment: (photo_id, body) => dispatch(createComment(photo_id, body))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm);
