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
    openDays: fakeData.days()
  }

  renderMeal = ({item}) => (
    <MealCard
      meal = {item}
      onOverlayClick = {() => console.log(item.id)}
    >
      <AddToCartGroup
        options = {item.cartOptions}
        onOptionClick = {() => console.log('clicked an option')}
      />
    </MealCard>
  )

  headerChange = v => {
    let i = this.state.openDays.indexOf(v)
    this.setState({selectedDay: i})
  }

  render() {
    let {selectedDay, openDays, isVisible} = this.state;

    return (
      <ScrollView
        style = {{flex:1, backgroundColor: 'white'}}
        showsVerticalScrollIndicator = {false}
      >
        <Container>
          <NavBar>
            <NavItem
              onPress = {() => console.log('sign in')}
              action = 'Sign in'
            />
          </NavBar>
        </Container>
        <Container>
          <Heading
            onValueChange = {this.headerChange}
            title = {openDays[selectedDay]}
            options = {openDays}
            highlight
            style = {{marginBottom: 20}}
          />
        </Container>
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
