import React, {useState} from 'react';
import './App.css';
import FacebookLogin from "react-facebook-login";


function App() {
  const [accessToken, setAccessToken] = useState("");

  const componentClicked = data => {
    console.log("data: " + data);
  }
  
  const responseFacebook = (response) => {
    //console.log(response);
    setAccessToken(response.accessToken);
  }

  return (
    <div className="App">
      {accessToken}
      <FacebookLogin
        appId="720150288548538"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />
    </div>
  );
}

export default App;
