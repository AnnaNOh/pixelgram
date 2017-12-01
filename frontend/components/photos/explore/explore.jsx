import React from 'react';
import ExploreItem from './explore_item';
import Loading from '../../greeting/loading';


class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.props.getAllPhotos().then(()=> this.setState({loading: false}));
  }

  render(){
    if (this.state.loading) {
      return(
        <Loading />
      );
    }
    else {
    return(
      <div className="explore-index-div">
        <ul className="explore-index">
          <h2 className="explore">Explore</h2>
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
}
export default Explore;
