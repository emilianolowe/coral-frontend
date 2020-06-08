import React from 'react';
import styled from 'styled-components';

const Settings = () => {
  const [value, setValue] = React.useState(' ');
  const onChange = event => setValue(event.target.value);
  return (
    <div className="container">
      <br /><br />
      <h1>Your Profile</h1>
      <div className="container">
        <form className="mt-4" //onSubmit={this.handleSave}
        >
          <div className="container row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" id="firstName" name="firstName"
              // value={value}
              //className="form-control" onChange={onChange} 
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" id="lastName" name="lastName"
              // value={this.state.settings.lastName}
              //className="form-control" onChange={this.handleInputChange} 
              />
            </div>
          </div>
          <div className="form-group">
            <label>About You</label>
            <input type="text" id="aboutYou" name="aboutYou"
            // value={this.state.property.size}
            //className="form-control" onChange={this.handleInputChange} 
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Save</button>
          <br /><br />
        </form>
      </div>
    </div>
  );
}

export default Settings;