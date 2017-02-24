// import React, { Component } from 'react';
// import store from '../store';
import { connect } from  'react-redux';
import WikiPages from '../components/WikiPages';

// export default class WikiPagesContainer extends Component {

  const mapStateToProps = (state) => {
    return {
      allPages: state.allPages
    }
  }

//   constructor() {
//     super();
//     this.state = store.getState()
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render () {

//     return (
//       <WikiPages allPages={this.state.allPages} />
//     );
//   }
// }

export default connect(mapStateToProps)(WikiPages);

