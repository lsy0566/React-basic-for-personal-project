import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Toggle from './Toggle';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import Page from './Page';
import NumberList from './NumberList';
import Blog from './Blog';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator';
import WelcomeDialog from './WelcomeDialog';
import SplitPane from './SplitPane';
import Contacts from './Contacts';
import Chat from './Chat';
import SignUpDialog from './SignUpDialog';

class Clock extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {date: new Date()};
  // }

  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {

    // const {date.toLocaleTimeString()} = this.state;
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
const messages = ['React', 'Re: React', 'Re:Re: React'];
const numbers = [1, 2, 3, 4, 5];
const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
]

root.render(
  <div>
    {/* <Toggle />
    <Greeting />
    <LoginControl />
    <Mailbox unreadMessages={messages} />
    <Page />
    <NumberList numbers={numbers} />
    <Blog posts={posts} />
    <NameForm />
    <EssayForm />
    <FlavorForm /> */}
    {/* <Reservation />
    <Calculator /> */}
    <WelcomeDialog />
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
      <SignUpDialog />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
