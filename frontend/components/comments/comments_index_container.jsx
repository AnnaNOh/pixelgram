import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CommentsIndex from './comments_index';
import { getComments, createComment, deleteComment } from '../../actions/comments';

const mapStateToProps = state => ({
  comments: Object.values(state.entities.comments),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getComments: photo_id => dispatch(getComments(photo_id)),
  deleteComment: (id) => dispatch(deleteComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex);
