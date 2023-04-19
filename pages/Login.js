import React, { useState } from "react";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const Container = styled(LinearGradient).attrs({
  colors: ["#e89d65", "#BC84E5", "#9D4EDD"],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  justify-content: space-between;
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: 30%;
`;

const SigninContainer = styled.View`
  background-color: #f6f6f6;
  height: 90%;
  width: 100%;
  border-top-left-radius: ${SCREEN_HEIGHT * 0.05}px;
  border-top-right-radius: ${SCREEN_HEIGHT * 0.05}px;
  box-shadow: 0px -10px 30px #b985bc;
  padding: ${SCREEN_WIDTH * 0.12}px;
`;

const WelcomeContainer = styled.View`
  margin-bottom: ${SCREEN_HEIGHT * 0.03}px;
`;

const WelcomeText = styled.Text`
  color: #9d4edd;
  font-weight: 700;
  font-size: 26px;
`;

const GuideText = styled.Text`
  color: #a3a3a3;
  font-weight: 700;
  font-size: 15px;
`;

const InputInfoContainer = styled.View``;

const InputInfoText = styled.Text`
  color: #d8d8d8;
  font-weight: 700;
  font-size: 18px;
`;

const InputInfo = styled.TextInput`
  height: 40px;
  width: 100%;
  border-bottom-width: 1.5px;
  border-bottom-color: #9d4edd;
  margin-bottom: ${SCREEN_HEIGHT * 0.05}px;
`;

const BtnContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  height: ${SCREEN_HEIGHT * 0.12}px;
  margin-top: ${SCREEN_HEIGHT * 0.015}px;
`;

const DefaultBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 70%;
  height: ${SCREEN_HEIGHT * 0.05}px;
  background-color: ${(props) => props.btnColor};
  border-radius: 40px;
  box-shadow: 0px 0px 3px ${(props) => props.btnColor}; ;
`;

const LoginText = styled.Text`
  font-weight: 700;
  color: #ffffff;
  font-size: 20px;
`;

const Login = () => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={dismissKeyboard}
      disabled={Platform.OS === "web"}
    >
      <Container>
        <KeyboardAvoidingView
          style={{
            width: "100%",
          }}
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        >
          <HeaderContainer></HeaderContainer>
          <SigninContainer>
            <WelcomeContainer>
              <WelcomeText>Welcome!</WelcomeText>
              <GuideText>Please sign in to continue</GuideText>
            </WelcomeContainer>

            <InputInfoContainer>
              <InputInfoText>E-Mail Address</InputInfoText>
              <InputInfo onChangeText = {(email) => setEmail(email)}></InputInfo>
            </InputInfoContainer>

            <InputInfoContainer>
              <InputInfoText>Password</InputInfoText>
              <InputInfo secureTextEntry onChangeText = {(password) => setPassword(password)}></InputInfo>
            </InputInfoContainer>

            <BtnContainer>
              <DefaultBtn
                onPress={() => navigation.navigate("Loading", { userEmail: {email}, userPassword: {password} })}
                btnColor="#9d4edd"
              >
                <LoginText>sign in</LoginText>
              </DefaultBtn>
              <DefaultBtn btnColor="#F8B13B">
                <LoginText>register</LoginText>
              </DefaultBtn>
            </BtnContainer>
          </SigninContainer>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Login;
