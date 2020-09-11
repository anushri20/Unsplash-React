import React from 'react';
import styled from 'styled-components';
import Background from '../images/back.png';

const Header = styled.header`
  max-width: 130rem;
  margin: 2rem auto;
  color: white;
  padding:100px 0 0 25rem;

`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
  color: white;
`;

const Input = styled.input`
  height: 2.5rem;
  width: 40rem;
  margin-top: 1em;
  outline: none;
  text-indent: 1em;
  font-size: 1em;

  ::placeholder {
    font-size: .8em;
  }
`;

const Button = styled.button`
  height: 2.5rem;
  padding: 0 1em;
  outline: none;
  cursor: pointer;
  background: #808080;
  border: none;
  color: #fff;
  font-size: 1em;
  margin-bottom: 200px;
`;

export const SubHeading = () => {
    return (
        <Header style={{ backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat' , backgroundFit: 'cover', 
        backgroundPosition: 'bottom'}}>
        <H1>Unsplash</H1>
        <p>The internet’s source of freely usable images.</p>
        <p>Powered by creators everywhere.</p>
        <form>
          <Input type="text" placeholder="Search photos" />
          <Button >Search</Button>
        </form>
      </Header>
    )
}
