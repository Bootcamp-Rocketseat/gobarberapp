import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 30px 150px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 40px 0 24px;
`;

export const BackToSignInButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackToSignInButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
