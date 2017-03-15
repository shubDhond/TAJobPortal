import React from "react";

export default class Profile extends React.Component {
  render() {
    return (
      <div>


        <form>
          First Name: <input type="text" name="firstName" />

          Last Name: <input type="text" name="lastName" />
          <br/>
          Student Number: <input type="text" pattern="[0-9]" name="sNumber" />
          <br/>
          About Me: <textarea rows="4" cols="50" name="about" />
          <br/>
          Resume: <input type="file" value="resume" />
          <br/>
          <input type="submit" value="Submit" />
        </form>

      </div>


    );
  }
}
