import React from 'react';
import {Button} from 'react-native';

import {useAuth} from '../../hooks/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const {signOut} = useAuth();

  return <Button title="Sair" onPress={signOut} />;
};

export default Dashboard;
