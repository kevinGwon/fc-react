import React from 'react';

export default function withHasMounted(Component) {
  class WrapperComponent extends React.Component {
    state = {
      hasMounted: false
    };
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          hasMounted: true
        });
      }, 1000);
    }
    render() {
      const { hasMounted } = this.state;
      return <Component {...this.props} hasMounted={hasMounted} />;
    }
  }

  WrapperComponent.displayName = `withHasMounted(${Component.name})`;

  return WrapperComponent;
}
