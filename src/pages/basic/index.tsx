import React from 'react';
import styled from 'styled-components';

interface InputProps {
    size?: 'big' | 'small' | 'medium';

}

const Input = styled.input.attrs((props: any) => ({
    type: "text",
    size: props.size || "1em"
}))`
  color: #BF4F74;
  font-size: 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  margin: ${props => props.size};
  padding: ${props => props.size}
`


const Basic: React.FC = () => {
    return (
        <>
            <Input placeholder={"A small text input"}/>
            <br/>
            <Input placeholder={"A bigger text input"} size="2em"/>
        </>
    );
};

export default Basic;
