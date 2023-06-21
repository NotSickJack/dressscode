import styled from "styled-components/native";

const DarkButton = styled.Pressable`
  background-color: #1a0047;
  border-radius: 20%;
  width: 320px;
  height: 60px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 40px;
`;

const LightButton = styled.Pressable`
  background-color: #fff;
  border-radius: 20%;
  width: 320px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export { DarkButton, LightButton };
