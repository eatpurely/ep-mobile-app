import React, { PureComponent } from 'react';
import moment from 'moment';
import { Text, View, FlatList, ScrollView} from 'react-native';
import ClientNav from '../common/ClientNav';
import styles from './styles';
import {
  Container,
  MealCard,
  AddToCartGroup,
  SubHeading,
  Heading,
  FullscreenModal,
} from '@eatpurely/mobile-ui-kit';

import * as constants from '../../helpers/constants';
import * as fakeData from '../../helpers/fakeData';

class MenuScreen extends PureComponent {

  state = {
    selectedDay: 0,
    openDays: fakeData.days(),
    cart: [],
    loggedIn: false,
    name: "Ez",
    currentMeal: moment('2:00 pm','h:m a').diff(moment()) < 0 ? 'dinner':'lunch',
    setAddress:fakeData.addresses[0],
    addresses:fakeData.addresses,
    meals: fakeData.meals(5)
  }

  renderMeal = ({item}) => (
    <MealCard
      meal = {item}
      onOverlayClick = {() => this.props.navigation
        .navigate('menuItem', {meal: item})}
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

  handleScroll = e => {
    let {meals} = this.state;
    let {SCREEN_HEIGHT} = constants
    let {contentSize:{height}, contentOffset:{y}, velocity:{y: dir}} = e.nativeEvent;

    let headerY = height - SCREEN_HEIGHT * meals.length;
    let intervals = Array(meals.length).fill()
      .map((e,i) => SCREEN_HEIGHT*i + headerY).concat(1)
      .sort((a,b) => a - b)

    let place = null

    if(dir > 0){
      place = intervals.filter(n => (y - 50) < n)[0] || [...intervals].pop();
    }else if(dir < 0){
      place = intervals.filter(n => (y - 50) > n).pop();
    }else{
      place = intervals.reduce((prev, curr) => {
        return Math.abs(curr - y) < Math.abs(prev - y) ? curr : prev
      })
    }

    this.scroll.scrollTo({y: place, animated: true})

  }

  render() {
    let {
      selectedDay, openDays, isVisible, currentMeal,
      loggedIn, name, setAddress, addresses, meals, cart
    } = this.state;

    return (
      <ScrollView
        style = {{flex:1}}
        showsVerticalScrollIndicator = {false}
        ref = { sV => this.scroll = sV}
        onScrollEndDrag = {this.handleScroll}
      >
        <ClientNav {...{cart, loggedIn}}/>
        <Container>
          <Heading
            onValueChange = {this.selectedDateChange}
            title = {openDays[selectedDay]}
            options = {openDays}
            highlight
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
          data = {meals}
          renderItem = {this.renderMeal}
          keyExtractor = {item => `meal_${item.id}`}
        />
      </ScrollView>
    );
  }
}

export default MenuScreen;
