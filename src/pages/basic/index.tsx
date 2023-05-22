import React from 'react';
import styled from "styled-components";


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

interface ButtonProps {
    $primary?: boolean
}

const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;
`

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

const ReversedButton = (props: any) => <Button
    {...props}
    children={props.children.split('').reverse()}
/>


const Basic: React.FC = () => {
    return (
        <>
            <Wrapper>
                <Title>
                    Hello Word!
                </Title>
            </Wrapper>

            <Button>Normal Button</Button>
            <Button as={ReversedButton}>
                Custom Button with Normal Button styles
            </Button>

        </>
    );
};

export default Basic;
