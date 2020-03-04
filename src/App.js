import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./components/Table";

// class App extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
//     friends
//   };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // // insert filter function here, then call below in render function, create component in filter folder
  // filterisCool = isCool => {
  //   const friends = this.state.friends.filter(friend => friend.isCool === isCool);
  //   this.setState({ friends });
  // }

  


  // Map over this.state.friends and render a FriendCard component for each friend object
function App() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>  
        <Table />
      </Wrapper>
    );
  }

export default App;
