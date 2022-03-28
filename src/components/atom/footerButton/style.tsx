import styled from "styled-components"
import { colors } from "../../../utils/colors"

export const Text = styled.Text` 
text-align: left;
font: normal normal normal 12px/17px Roboto;
letter-spacing: 0px;
color: ${colors.white};
`

export const Button = styled.TouchableOpacity`
width: 216px;
height: 44px;  
background: ${colors.lightOrange} 0% 0% no-repeat padding-box;
border-radius: 60px;
display: flex;
align-items: center;
justify-content: center;
`