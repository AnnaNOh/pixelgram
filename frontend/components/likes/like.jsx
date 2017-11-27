import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);

    const liked = this.props.likers.includes(this.props.currentUser.id);
    this.state = { liked };
    this.handleLike = this.handleLike.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.props.likers.includes(this.props.currentUser.id) !== this.state.liked) {
      this.setState({ liked: !this.state.like_state });
    }
  }

  handleLike(e) {
    e.preventDefault();
    if (this.state.liked) {
      console.log(this.props.photo_id);
      this.props.deleteLike(this.props.photo_id);
    }
    else {
      this.props.addLike(this.props.photo_id);
    }
  }

  render(){
    if (this.state.liked) {
      return(
          <i className='fa fa-heart liked-icon' onClick={this.handleLike}/>
      );
    }
    else {
      return(
          <i className='fa fa-heart-o not-liked-icon' onClick={this.handleLike}/>
      );
    }
  }

}

export default Like;
