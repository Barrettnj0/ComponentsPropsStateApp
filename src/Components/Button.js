//here is a boilerplate component structure
import React, { Component } from 'react';

class Button extends Component {
   constructor(props) {
     super(props)
       this.state = {  }
   }
   render() {
      return (  
          <div><button onClick={this.props.handleClicked}>Pick Student</button></div>
      );
   }
}
export default Button;