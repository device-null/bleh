import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import assign from 'lodash.assign';
import Editor from './editor.js';
import Request from 'request';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
import LoginPage from './components/LoginPage.js'
import {UserContext} from './components/User.js'

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


const fs = window.require('fs');
const isDev = window.require('electron-is-dev');
const electron = window.require('electron');
const path = window.require('path');
const electron_process = electron.process;
const electron_app = electron.app;
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const dialog = remote.dialog;

class App extends Component {
  constructor(props) {
    super(props);

    ipc.on('file-opened', (event, file, content) => {
      this.setState({
        markdownSrc: content
      });
    });

    ipc.on('save-file', (event) => {
      dialog.showSaveDialog((filename) => {
        if(filename == undefined){
          return;
        }

        var content = this.state.markdownSrc;

        fs.writeFile(filename, content, (err) => {
          if (err) console.log(err);
          alert("The file has been successfully saved.");
        })
      });
    });

    // Open the readme file
    var file_name = path.join((isDev ? '' : window.process.resourcesPath), "public/welcome.md");
    const content = fs.readFileSync(file_name).toString();
    file_name = path.join((isDev ? '' : window.process.resourcesPath), "public/login.html");
    const login = fs.readFileSync(file_name).toString();

    this.state = {
	  loggedIn: false,
      markdownSrc: content,
	  loginSrc: login,
      splitPaneSize: "20%"
    };

    this.onMarkdownChange = this.onMarkdownChange.bind(this);
    this.onViewChange = this.onViewChange.bind(this);
  }

  onMarkdownChange(md) {
    this.setState({
      markdownSrc: md
    });
  }

  onViewChange(e) {
    switch(e) {
      case "editor":
        this.setState({ splitPaneSize: "100%"})
        break;
      case "split":
        this.setState({ splitPaneSize: "20%"})
        break;
      case "view":
        this.setState({ splitPaneSize: "0%"})
        break;
      default:
        break;
    }
  }

  render() {
    const {user} = this.props;
	  if(!this.state.loggedIn) {
		  return (
      <div className="App">
        <UserContext.Provider value={user}>
          <div className="view-pane">
            <LoginPage />
          </div>
          </UserContext.Provider>
      </div>
    );
	  }
    return (
      <div className="App">
        <SplitPane split="vertical" size={this.state.splitPaneSize}>
          <div className="editor-pane">
            <Editor className="editor" value={this.state.markdownSrc} onChange={this.onMarkdownChange}/>
          </div>
          <div className="view-pane">

          </div>
        </SplitPane>
      </div>
    );
  }
}

export default App;
