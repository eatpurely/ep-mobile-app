import React, { Component } from 'react';
import moment from 'moment';
import { Text, View, Image, FlatList, ScrollView, Picker } from 'react-native';
import styles from './styles';
import {
  Container,
  NavBar,
  NavItem,
  MealCard,
  AddToCartGroup,
  SubHeading,
  Heading,
  Button,
  FullscreenModal,
  AddressForm,
  Map,
  MapMarker,
  InputFieldCreditCard,
} from '@eatpurely/mobile-ui-kit';

import * as fakeData from '../../helpers/fakeData';

class MenuScreen extends Component {

  state = {
    selectedDay: 0,
    openDays: fakeData.days(),
    cart: [],
    loggedIn: false,
    name: "Ez",
    currentMeal: moment('2:00 pm','h:m a').diff(moment()) < 0 ? 'dinner':'lunch',
    setAddress:fakeData.addresses[0],
    addresses:fakeData.addresses
  }

  renderMeal = ({item}) => (
    <MealCard
      meal = {item}
      onOverlayClick = {() => console.log(item.id)}
    >
      <AddToCartGroup
        options = {item.cartOptions}
        onOptionClick = {option => this.setState({cart: [...this.state.cart, option]})}
      />
    </MealCard>
  )

  selectedDateChange = v => {
    let i = this.state.openDays.indexOf(v)
    this.setState({selectedDay: i})
  }

  addressChange = v => {
    this.setState({setAddress: v})
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

  render() {
    let {
      selectedDay, openDays, isVisible, currentMeal,
      loggedIn, name, setAddress, addresses
    } = this.state;

    return (
      <ScrollView
        style = {{flex:1, backgroundColor: 'white'}}
        showsVerticalScrollIndicator = {false}
      >
        <Container>
          <NavBar>
            <NavItem {...this.getNavItem()}/>
          </NavBar>
        </Container>
        <Container>
          <Heading
            onValueChange = {this.selectedDateChange}
            title = {openDays[selectedDay]}
            options = {openDays}
            highlight
            style = {{marginBottom: 20}}
          />
        </Container>
        {!loggedIn && addresses.length &&
        <Container style = {styles.greetingWrapper}>
          <Text style={styles.greeting}>
            {`Hey ${name}, order ${currentMeal} to `}
          </Text>
          <Heading
            onValueChange = {this.addressChange}
            color = {styles.address.color}
            title = {setAddress}
            options = {addresses}
            style = {styles.address}
          />
        </Container>}
        <Container>
          <SubHeading style = {{marginBottom: 20}} title = "Entrees"/>
        </Container>
        <FlatList
          data = {fakeData.meals(5)}
          renderItem = {this.renderMeal}
          keyExtractor = {item => `meal_${item.id}`}
        />
      </ScrollView>
    );
  }
}

export default MenuScreen;
