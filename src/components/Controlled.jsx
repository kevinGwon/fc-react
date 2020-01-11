import React from 'react';

export default class Controlled extends React.Component {
  state = { value: '' };

  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} onChange={this._change} />
      </div>
    );
  }

  _change = e => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
}
