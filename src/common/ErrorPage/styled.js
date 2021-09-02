import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ErrorPageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
position: absolute;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%)
`;

export const ErrorIcon = styled.img``;

export const Header = styled.header`
font-size: 36px;
line-height: 120%;
@media(max-width: ${({theme}) => theme.breakpoint.mobileMin}px) {
  font-size: 28px;
}
@media(max-width: ${({theme}) => theme.breakpoint.mobile}px) {
  font-size: 18px;
}
`;

export const Section = styled.p`
font-size: 22px;
@media(max-width: ${({theme}) => theme.breakpoint.mobileMin}px) {
  font-size: 12px;
}
@media(max-width: ${({theme}) => theme.breakpoint.mobile}px) {
  font-size: 16px;
`;

export const ButtonLink = styled(NavLink)`
font-size: 14px;
font-weight: bold;
line-height: 19px;
color: ${({ theme }) => theme.color.white};
background: ${({ theme }) => theme.color.blue};
text-decoration: none;
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 24px;
border-radius: 5px;
@media(max-width: ${({theme}) => theme.breakpoint.mobileMin}px) {
  font-size: 10px;
}
@media(max-width: ${({theme}) => theme.breakpoint.mobile}px) {
  font-size: 12px;
`;

