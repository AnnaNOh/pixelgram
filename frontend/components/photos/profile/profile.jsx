import React from 'react';
import ProfileItem from './profile_item';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log(this.props);
    if (this.props.location.pathname.slice(6)) {
      this.props.getProfilePhotos(this.props.location.pathname.slice(6));
    }
  }

  render(){
    return(
      <div>

        <ul className="photos-index-container">
          {this.props.photos.map(photo => (
            <ProfileItem
              key={photo.id}
              photo={photo}
            />
          ))}
        </ul>

      </div>
    );
  }
}

export default Profile;
