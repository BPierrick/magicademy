import React from 'react';

import {
	Router,
	Scene,
} from 'react-native-router-flux';

import Home from './js/components/Home';
import ProductPage from './js/components/ProductPage';
import Card from './js/components/Card';

import productsData from './js/utils/productsData';
import AppStore from './js/stores/AppStore';

productsData.init();

export default class App extends React.Component {
  render() {
  	return (
      <Router>
				<Scene key='root'>
					<Scene 
						key='home'
						component={Home}
						title='Magicademy'
						navigationBarTitleImage={require('./assets/magicademy_logo.png')}
						Initial
					/>
					<Scene
						key='productPage'
						component={ProductPage}
						backTitle=" "
					/>
				</Scene>
			</Router>
    );
  }
}
