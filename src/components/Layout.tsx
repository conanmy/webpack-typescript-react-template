import * as React from 'react';

export default class Layout extends React.Component<any, any> {
  render() {
    return (
      <div>
        <header>
          <h1>React project</h1>
        </header>
        {this.props.children}
      </div>
    );
  }
}