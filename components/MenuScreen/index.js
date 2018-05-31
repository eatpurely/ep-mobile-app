import React, { Component } from 'react';
import moment from 'moment';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
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

import fakeEntrees from '../../helpers/fakeEntrees';

class MenuScreen extends Component {

  renderMeal = ({item}) => (
    <MealCard meal = {item}>
      <AddToCartGroup options = {item.cartOptions}/>
    </MealCard>
  )

  getDate = () => moment().calendar(null, {
    sameDay: '[Today], MMMM D',
    nextDay: '[Tomorrow], MMMM D',
    nextWeek: '[Next] dddd, MMMM D',
    sameElse: 'MMMM D'
  })

  render() {
    return (
      <View style = {{flex:1, backgroundColor: 'white'}}>
        <Container>
          <NavBar>
            <NavItem
              onPress = {() => console.log('sign in')}
              action = 'Sign up'
            />
          </NavBar>
        </Container>
        <ScrollView>
          <Container>
            <Heading
              onPress = {()=> console.log("hello")}
              title = {this.getDate()}
              hasOptions
              highlight
              style = {{marginBottom: 30}}
            />
          </Container>
          <Container>
            <SubHeading style = {{marginBottom: 20}} title = "Entrees"/>
          </Container>
          <FlatList
            data = {fakeEntrees(5)}
            renderItem = {this.renderMeal}
            keyExtractor = {item => `meal_${item.id}`}
          />
        </ScrollView>
      </View>
    );
  }
}

export default MenuScreen;
