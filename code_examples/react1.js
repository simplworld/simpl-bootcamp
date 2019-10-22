import React from 'react';

// Our reusable AlertButton component
class AlertButton extends React.Component {
  handleClick = (e) => {
    const { message } = this.props;
    alert(message);
  }

  render() {
    return (
      <button
        onClick={this.handleClick}>
        {this.props.children}
      </button>
    )
  }
}

// How it would be used inside another
class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <h1>This is an example homepage</h1>
        <AlertButton message="It worked!">
          Show Alert!
        </AlertButton>
      </div>
    )
  }
}