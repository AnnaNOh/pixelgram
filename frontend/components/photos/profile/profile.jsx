import React from 'react';
import ProfileItem from './profile_item';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    // if (this.props.location.pathname.slice(6)) {
      console.log('i got past the thing');
      console.log(this.props);
      this.props.getProfilePhotos(this.props.location.pathname.slice(6));
      this.props.getUser(this.props.location.pathname.slice(6));
    // }
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
    console.log(this.props);
    const user = this.props.user;
    return(
      <div>
        <div className="user-profile-container">
          <img
            className="user-img"
            src={user.img_url}
          />
        <div className="user-profile-right">
          <div className="user-profile-right-top">
            <h3>{user.username}</h3>
            {this.followingButton(user)}
          </div>
          <div className="user-profile-right-bottom">
            <h4>{user.photos_count} posts</h4>
            <h4>{user.followers_count} followers</h4>
            <h4>{user.follows_count} following</h4>
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
            />
          ))}
        </ul>

      </div>
    );
  }
}

export default Profile;
