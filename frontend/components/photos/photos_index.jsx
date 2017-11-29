import React from 'react';
import PhotoItem from './photo_item';


class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchPhotos();
  }

  render(){
    let currentUser = this.props.currentUser;
    return(
      <div>

        <ul className="photos-index-container">
          {this.props.photos.map(photo => (
            <PhotoItem
              key={photo.id}
              photo={photo}
              user={this.props.user}
              createComment={this.props.createComment}
              deleteComment={this.props.deleteComment}
              currentUser={this.props.currentUser}
              getUser={this.props.getUser}
              addFollow={this.props.addFollow}
              deleteFollow={this.props.deleteFollow}
            />
          ))}
        </ul>

        <div className="side-bar">
          <img
            className="current-user-img"
            onClick={()=> this.props.history.push(`/user/${currentUser.username}`)}
            src={currentUser.img_url}
            alt={currentUser.username} />
          <div className="currentuser-username-email">
            <button onClick={()=> this.props.history.push(`/user/${currentUser.username}`)}>
              <h2 className="current-user-username">{currentUser.username}</h2>
            </button>
            <h2 className="current-user-email">{currentUser.email}</h2>
          </div>
          <div className="follows">
            Following
          </div>
          <div className="footer-links">
            <button>About Me</button>
            <button>Support</button>
            <button>Blog</button>
            <button>Press</button>
            <button>API</button>
            <button>Jobs</button>
            <button>Privacy Terms</button>
            <button>Directory</button>
            <button>Language</button>
          </div>
          <div>
            <i className="fa fa-copyright" aria-hidden="true"></i>
            2017 INSTAGRAM
          </div>
        </div>



      </div>
    );
  }
}

export default PhotoIndex;
