import styled from "styled-components";

export const MainWrapper = styled.div `
  margin: 40px auto;
  max-width: 1000px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;   
`

export const CitiesWrapper = styled.section`
  width: 20%;
  //background: aquamarine;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const MapWrapper = styled.section`
  width: 80%;
  //background: azure;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const  CitySearchWrapper = styled.section`
  background: azure;
  text-align: center;
  margin-bottom: 10px;
`
// -- Form elts

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  background: #053161; 
  border: 1px solid #042b55;
  color: #fff;
  text-align: center;
  padding:5px 10px;
  cursor: pointer;
`

export const InputTextField = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ddd;
  padding:10px 0px 10px 10px;
`

