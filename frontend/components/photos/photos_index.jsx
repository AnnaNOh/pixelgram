import React from 'react';
import PhotoItem from './photo_item';
import Loading from '../greeting/loading';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.props.fetchPhotos().then(()=> this.setState({loading: false}));
  }

  render(){
    let currentUser = this.props.currentUser;
    if (this.state.loading) {
      return(
        <Loading />
      );
    }
    else {
      return(
        <div className="photo-index">

          <ul className="photos-index-container">
            {this.props.photos.sort(function(a,b){return(b.id-a.id);})
            .map(photo => (
              <PhotoItem
                key={photo.id}
                photo={photo}
                user={this.props.user}
                currentUser={this.props.currentUser}
                getUser={this.props.getUser}
                addFollow={this.props.addFollow}
                deleteFollow={this.props.deleteFollow}
                fetchPhoto={this.props.fetchPhoto}
                />
            ))}
          </ul>

          <div className="side-bar">
            <div className="side-bar-fix">
              <div className="side-bar-top">
                <img
                  className="current-user-img"
                  onClick={()=> this.props.history.push(`/user/${currentUser.username}`)}
                  src={currentUser.img_url}
                  alt={currentUser.username} />
                <div className="currentuser-username-email">
                  <button onClick={()=> this.props.history.push(`/user/${currentUser.username}`)}>
                    <h2 className="current-user-username">{currentUser.username}</h2>
                  </button>
                  <h3 className="current-user-email">{currentUser.email}</h3>
                </div>


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
              <div className="copyright">
                <i className="fa fa-copyright" aria-hidden="true"></i>
                2017 INSTAGRAM
              </div>
            </div>
            </div>

          </div>



        </div>
      );

    }
  }
}

export default PhotoIndex;
