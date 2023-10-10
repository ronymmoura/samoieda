import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background: #1e193c;
  height: 100%;
  padding: 20px;
`;

export const Header = styled.View`
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 100px;
  margin-bottom: 50px;
  align-items: center;
`;

export const HeaderLogo = styled.Image`
  width: 300px;
  height: 250px;
`;

export const Content = styled.View`
  align-items: center;
  width: 100%;
  background: #302b4f;
  border-radius: 40px;
  padding: 25px;
  elevation: 3;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 18px;
  width: 100%;
  position: absolute;
  left: 30px;
  top: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Button = styled.TouchableHighlight`
  background: #5881f3;
  border-radius: 20px;
  padding: 15px 40px;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  elevation: 3;
`;

export const ButtonRed = styled.TouchableHighlight`
  background: #fb7785;
  border-radius: 20px;
  padding: 15px 40px;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  elevation: 3;
`;

export const ButtonGreen = styled.TouchableHighlight`
  background: #74b969;
  border-radius: 20px;
  padding: 15px 40px;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  elevation: 3;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Total = styled.Text`
  color: #fff;
  margin-top: 35px;
  font-size: 20px;
  text-align: center;
`;
