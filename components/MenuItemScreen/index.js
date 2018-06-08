import React, { Component } from 'react';
import {ScrollView, Image, View, Text} from 'react-native';
import ClientNav from '../common/ClientNav';
import {
  Container,
  Heading
} from '@eatpurely/mobile-ui-kit';

import * as constants from '../../helpers/constants';
import * as fakeData from '../../helpers/fakeData';
import styles from './styles';

class MenuItemScreen extends Component {

  state = {
    cart: [],
    loggedIn: false,
    name: "Ez",
    meals: fakeData.meals(5),
    meal: {}
  }

  componentDidMount(){
    let {meal} = this.props.navigation.state.params;
    this.setState({meal})
    console.log('the meal', meal)
  }

  render(){
    let {
      cart,
      loggedIn,
      meal : {
        imageUrl, title, ingredientsList: iL, dietaryCategoriesList: dCL,
      }
    } = this.state;
    console.log(imageUrl, title, iL,  dCL,)
    return(
      <ScrollView style = {{flex: 1}}>
        <ClientNav {...{cart, loggedIn}}/>
        <Container>
          <Image
            source = {{uri: imageUrl}}
            style = {styles.image}
            resizeMode = 'cover'
          />
        </Container>
        <Container>
          <Heading title = {title} highlight/>
        </Container>
        <Container>
          <View>
            <View style = {styles.details}>
              <Text style = {styles.iL}>{iL}</Text>
              <Text style = {styles.dCL}>{dCL}</Text>
            </View>
          </View>
        </Container>
      </ScrollView>

    )
  }
}

export default MenuItemScreen;
