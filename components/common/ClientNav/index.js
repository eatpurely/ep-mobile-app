import React, { PureComponent } from 'react';
import moment from 'moment';
import { Text, View, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {
  Container,
  NavBar,
  NavItem,
} from '@eatpurely/mobile-ui-kit';


class ClientNav extends PureComponent{
  state = {
    cart: this.props.cart,
    loggedIn: this.props.loggedIn,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps !== this.props ? {
      cart: nextProps.cart,
      loggedIn: nextProps.loggedIn,
    } : null
  }

  getNavItem(){
    let [action, onPress, icon, count] = Array(3).fill()
    let {cart, loggedIn} = this.state;

    if(cart.length > 0){
      icon = 'local-offer'
      count = cart.length
      onPress = () => console.log('cart press')
    }else if(!loggedIn){
      action = 'Sign in'
      onPress = () => console.log('sign in')
    }else if(loggedIn){
      action = 'My Account'
      onPress = () => console.log('my account')
    }
    return {action, onPress, icon, count}
  }

  render(){
    return(
      <Container>
        <NavBar>
          <NavItem {...this.getNavItem()}/>
        </NavBar>
      </Container>
    )
  }
}

export default ClientNav;
