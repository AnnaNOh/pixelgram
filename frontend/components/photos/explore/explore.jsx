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
          {this.props.photos.map(photo => (
            <ExploreItem
              key={photo.id}
              photo={photo}
              createComment={this.props.createComment}
              deleteComment={this.props.deleteComment}
              currentUser={this.props.currentUser}
            />
          ))}
        </ul>

      </div>
    );
  }
}

export default Explore;
