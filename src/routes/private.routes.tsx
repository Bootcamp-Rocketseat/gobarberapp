import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const Private = createStackNavigator();

const PrivateRoutes: React.FC = () => (
  <Private.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#312e38'},
    }}>
    <Private.Screen name="Dashboard" component={Dashboard} />
  </Private.Navigator>
);

export default PrivateRoutes;
