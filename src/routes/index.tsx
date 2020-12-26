import React from 'react';

import PublicRoutes from './public.routes';
import PrivateRoutes from './private.routes';

import {useAuth} from '../hooks/auth';
import {View, ActivityIndicator} from 'react-native';

const Routes: React.FC = () => {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return user ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
