import React from "react";
import styled from "styled-components";

import { GithubContext } from "../Context/context";

export const MainView = () => {
  const { githubUser } = React.useContext(GithubContext);

  return <Wrapper>
    <div className="container">
      <div className="user">
        <div className="userItem">
          Hi my name is Kristinn. I'm a computer science student.
        </div>
        <div className="userItem">
          Shiny button!
        </div>
      </div>

    </div>
    </Wrapper>;
};

const Wrapper = styled.article`
  .container {
    ${'' /* background-color:black; */}
    display: grid;
    border: 1px solid red;
    height:100vh;
    width:100vw;
    
  }
  .user {
    display:grid;
    width:50%;    
    padding-left: 5%;
    padding-right: 10%;
    padding-top: 3%;
    padding-bottom: 3%;
    grid-template-rows: repeat(2, 1fr);    
    border: 5px solid green;
  }
  .userItem {
    width:100%;
    border: 5px solid pink;

  }
  @media (max-width: 800px) {
    .header{
      grid-template-columns: repeat(1, 1fr);
  }

`;



