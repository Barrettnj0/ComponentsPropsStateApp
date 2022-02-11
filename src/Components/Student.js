//here is a boilerplate component structure
import React, { Component } from 'react';

class Student extends Component {
   constructor(props) {
     super(props)
       this.state = {  }
   }
   
   render() {
      return (  
          <div>
            <div>
               {this.props.student.name}
            </div>
            <div>
               <img src={this.props.student.img} width="300px"/>
            </div>
         </div>
      );
   }
}
export default Student;