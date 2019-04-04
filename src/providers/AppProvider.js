import React, { createContext } from 'react';
import AppContext from "../context/appContext";
class AppProvider extends React.Component {
  state = {
    user: {
      id: 0,
    },
  };

 render() {
   return (
     <AppContext.Provider
        value={{
          state: this.state,
          setUser: this.setUser,
          attemptLogin: this.attemptLogin,
        }}
      >
      <div>{this.props.children}</div>
     </AppContext.Provider>
  );
 }

 setUser = d => {
    this.setState({ user: {id: d.target.value } });
    console.log(d.target.value);
  };

  attemptLogin = x => {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    /*
    Make RESTFUL request
    */
    //If valid

    //console.log(username)
  }
/*
 componentDidMount = async () => {
  try {
    const localeCodes = await getLocaleCode();
    const localeObj = await getlocaleByCode();
    this.setState({ localeCodes, localeObj });
   } catch (err) {
      console.log(err);
   }
 };
 */
}

export default AppProvider;
