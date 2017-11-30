import React from 'react';
import ExploreItem from './explore_item';


class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getAllPhotos();
  }

  render(){
    return(
      <div>

        <ul className="photos-index-container">
          {this.props.photos.sort(function(a,b){return(b.id-a.id);}).map(photo => (
            <ExploreItem
              key={photo.id}
              photo={photo}
              user={this.props.user}
              currentUser={this.props.currentUser}
              getUser={this.props.getUser}
              addFollow={this.props.addFollow}
              deleteFollow={this.props.deleteFollow}
            />
          ))}
        </ul>

      </div>
    );
  }
}

export default Explore;
