import React from 'react';
import ProfileItem from './profile_item';
import Loading from '../../greeting/loading';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillMount(){
      this.props.getProfilePhotos(this.props.location.pathname.slice(6)).then(()=> this.setState({loading: false}));
      this.props.getUser(this.props.location.pathname.slice(6));
  }

  followingButton(user){
    if (user.following){
      return (
        <button className="already-following-button" onClick={()=> this.props.deleteFollow(user.id)}>
          Following
        </button>
      );
    }
    else {
      return (
        <button className="notyet-following-button" onClick={()=> this.props.addFollow(user.id)}>
          Follow
        </button>
      );
    }
  }

  render(){
    const user = this.props.user;
    if (this.state.loading) {
      return(
        <Loading />
      );
    }
    else {
    return(
      <div className="profile-index-div">
        <div className="user-profile-container">
          <img
            className="user-img"
            src={user.img_url}
          />
        <div className="user-profile-right">
          <div className="user-profile-right-top">
            <h3 className="user-profile-username">{user.username}</h3>
            {this.followingButton(user)}
          </div>
          <div className="user-profile-right-bottom">
            <h4><strong>{user.photos_count}</strong> posts</h4>
            <h4><strong>{user.followers_count}</strong> followers</h4>
            <h4><strong>{user.follows_count}</strong> following</h4>
          </div>
        </div>

        </div>

        <ul className="profile-index">
          {this.props.photos.sort(function(a,b){return(b.id-a.id);}).map(photo => (
            <ProfileItem
              key={photo.id}
              photo={photo}
              currentUser={this.props.currentUser}
              addFollow={this.props.addFollow}
              deleteFollow={this.props.deleteFollow}
              getUser={this.props.getUser}
            />
          ))}
        </ul>

      </div>
    );
  }
}
}

export default Profile;
