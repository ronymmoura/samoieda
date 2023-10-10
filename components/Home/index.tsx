import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { Button, ButtonGreen, ButtonRed, ButtonText, Container, Content, Header, HeaderLogo, HeaderText, Title, Total } from "./styles";

const Screen: React.FC = () => {
  const [ButtonSamoiedaVisible, setButtonSamoiedaVisible] = useState(true);
  const [ButtonSamoiedoVisible, setButtonSamoiedoVisible] = useState(false);
  const [ButtonAhVisible, setButtonAhVisible] = useState(false);

  const [FinishVisible, setFinishVisible] = useState(false);

  const [TotalDia, setTotalDia] = useState(5);
  const [TotalMes, setTotalMes] = useState(5);
  const [TotalAno, setTotalAno] = useState(5);

  function handleSamoieda() {
    setButtonSamoiedaVisible(false);
    setButtonSamoiedoVisible(true);
    setButtonAhVisible(true);
  }

  function handleSamoiedo() {
    setButtonSamoiedaVisible(true);
    setButtonSamoiedoVisible(false);
    setButtonAhVisible(false);
  }

  function handleAh() {
    setButtonSamoiedaVisible(true);
    setButtonSamoiedoVisible(false);
    setButtonAhVisible(false);
  }

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <Container>
        <Header>
          <HeaderText>Eu so bobaum =D</HeaderText>
          <HeaderLogo source={require("../../assets/logo.png")} />
        </Header>

        <Content>
          <Title>Qual a raça?</Title>
          {ButtonSamoiedaVisible && (
            <Button underlayColor="#4f75dd" onPress={handleSamoieda}>
              <ButtonText>Samoieda!</ButtonText>
            </Button>
          )}

          {ButtonSamoiedoVisible && (
            <ButtonRed underlayColor="#db626e" onPress={handleSamoiedo}>
              <ButtonText>Samoiedo?</ButtonText>
            </ButtonRed>
          )}

          {ButtonAhVisible && (
            <ButtonGreen underlayColor="#63a058" onPress={handleAh}>
              <ButtonText>Aaaah...</ButtonText>
            </ButtonGreen>
          )}
        </Content>

        <Total>
          Um total de {TotalDia} "samoiedas" foram ditos hoje, {TotalMes} ditos este mês, e {TotalAno} ditos apenas este ano
        </Total>
      </Container>
    </SafeAreaView>
  );
};

export default Screen;
