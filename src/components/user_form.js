import React, { Component } from 'react';
import { Control, Form, actions } from 'react-redux-form';

class UserForm extends Component {
   onSubmit(user) {
     const { dispatch } = this.props;
   }
   render() {
     return(
       <Form model="user" onSubmit={(user) => this.onSubmit(user)}>
         <label>First name:</label>
         <Control.text model="user.firstName" />

         <label>Last name:</label>
         <Control.text model="user.lastName" />

         <button type="submit">
           Finish registration!
         </button>
       </Form>
     )
   }
}

export default UserForm;
