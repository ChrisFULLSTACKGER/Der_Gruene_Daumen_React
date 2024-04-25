import React from "react";
import "@fontsource/ubuntu/300.css";
import "./logo.css"
import styled from "styled-components";



const Logo = () => {
    return (
        <div className="logoWrapper">
            <div className="logoContainer">
                <p className="logoItem">Der Grüne</p>
            </div>
        </div>
    );
};


// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: red;
// `;
//
// const Wrapper = styled.section`
//   padding: 4em;
//   background: black;
// `;
//
// render(
//     <Wrapper>
//         <Title>
//             Test
//         </Title>
//     </Wrapper>
// );


export default Logo;