import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    const liked = this.props.liked;
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(e) {
    e.preventDefault();

    if (this.props.photo.liked) {

      this.props.deleteLike(this.props.photo.id);
    }
    else {
      this.props.addLike(this.props.photo.id);

    }
  }

  render(){
    if (this.props.photo.liked) {
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
