import React, { createContext, Component } from 'react'; // on importe createContext qui servira à la création d'un ou plusieurs contextes

/**
 * `createContext` contient 2 propriétés :
 * `Provider` et `Consumer`.
 * */
export const UserContext = createContext({
  name: ''
});

export class UserProvider extends Component {
  state = {
    name: 'Formation React'
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
