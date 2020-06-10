import React, { Component } from "react";
import MainLayout from "../components/layouts/MainLayout";

export default class Home extends Component {
  static getInitialProps() {
    console.log('get initial props')
    return {
      user: {
        name: 'Francis',
        lastName: "Medici"
      }
    }
  }
  constructor(props) {
    super(props)
    console.log('constructor');
    console.log(this.props.user);
    this.state = {
      user: this.props.user
    }
  }
  render() {
    console.log(this.props.user)
    console.log(this.props.user);
    return (
      <>
        <MainLayout>
          <h1>Welcome to NextJS</h1>
        </MainLayout>
      </>
    );
  }
}
