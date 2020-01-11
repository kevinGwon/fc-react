import React from 'react';

export default class UnControlled extends React.Component {
  inputRef = React.createRef();
  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <button type='button' onClick={this.click}>
          전송
        </button>
      </div>
    );
  }
  click = () => {
    console.log(this.inputRef.current.value);
  };
}
