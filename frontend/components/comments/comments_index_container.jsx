import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CommentsIndex from './comments_index';
import { getComments, createComment, deleteComment } from '../../actions/comments';

const mapStateToProps = (state, ownProps) => ({
  comments: Object.values(state.entities.comments).
  filter(comment => comment.photo_id === ownProps.photo_id),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getComments: photo_id => dispatch(getComments(photo_id)),
  deleteComment: (id) => dispatch(deleteComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex);
