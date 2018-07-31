import React, { Component } from 'react';
import firebase from './firebase';

class App extends Component {
  constructor() {
    super();
  }

  state = {
    posts: [],
    loading: true
  }

  componentWillMount() {
    let postsRef = firebase.database().ref('posts')
    let _this = this;

    postsRef.on('value', function(snapshot) {
      console.log(snapshot.val());
     
      _this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }
  
  render() {
    return (
      <div className="App">
        Hello World
        {this.props.children && React.cloneElement(this.props.children, {
            firebaseRef: firebase.database().ref('posts'),
            posts: this.state.posts,
            loading: this.state.loading
          })}
      </div>
    );
  }
}

export default App;
