import React from 'react';
import { UserContext } from './store/UserProvider';

/**
 * Le Consumer expose le contenu de la propriété `value`
 * du Provider
 */
export const Test = () => (
  <UserContext.Consumer>
    {value => <h1>Hello {value.name}!</h1>}
  </UserContext.Consumer>
);
