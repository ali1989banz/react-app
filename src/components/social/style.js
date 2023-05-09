import Styled from "styled-components";
export const SocialMedia = Styled.div`
  height: auto;
`;
export const Social = Styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background-color:${props => props.item === 1? "#3b5998": ""};
  background-color:${props => props.item === 2? "#498cbf": ""};
  background-color:${props => props.item === 3? "#cc2127": ""};
`;

export const Icon = Styled.i `
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
  margin-top:20px;
`;

export const P = Styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
  float:left;
`;
export const Info1 = Styled.span`
  display: block;
  margin-bottom: 8px
`;
export const Info2 = Styled.span`
  font-weight: normal
`;


