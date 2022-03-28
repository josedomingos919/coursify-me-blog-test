import styled from "styled-components"
import { colors } from "../../../../utils/colors"

export const Text = styled.Text`
color: ${colors.detail}; 
text-align: left;
font: normal normal normal 17px/27px Roboto;
letter-spacing: 0px;
margin-bottom: ${({ marginBottom }:{ marginBottom: number })=> marginBottom }px;
`