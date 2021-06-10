import React, {useState} from "react";
import axios from "axios";

function App() {

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  function handleClick() {
    console.log("Clicked");
    axios.request({
      method: 'get',
      url: "http://localhost:5000/auth/google"
    });
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setUser(prevUser => {
      return {
        ...prevUser,
        [name] : value
      };
    });
  }

  function handleSubmit(event) {
    let params = new URLSearchParams();
    params.append('username', user.username);
    params.append('password', user.password);
    axios.request({
      method: 'POST',
      url: `http://localhost:5000/register`,
      data: params
    });
    setUser({
      username: "",
      password: ""
    });
    event.preventDefault();
  }


    return (
      <div>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" placeholder="Enter Username" name="username" onChange={handleChange} value={user.username} required/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Password" name="password" onChange={handleChange} value={user.password} required/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={() => { console.log("button clicked");}}>Submit</button>
    </form>
    <button onClick={handleClick}> Sign Up with Google </button> </div>

  );
}

export default App;
