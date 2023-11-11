import { Component } from 'react';

const withAuthentication = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthenticated: false,
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isAuthenticated: true });
      }, 5000);
    }

    render() {
      const { isAuthenticated } = this.state;

      if (isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <p>Please log in to view this content.</p>;
      }
    }
  };
};

class SecureComponent extends Component {
  render() {
    return <div>Top secret information for authenticated users!</div>;
  }
}

const SecureComponentWithAuthentication = withAuthentication(SecureComponent);

const HOC = () => {
  return (
    <div>
      <SecureComponentWithAuthentication />
    </div>
  );
};

export default HOC;
