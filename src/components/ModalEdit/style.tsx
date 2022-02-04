import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  z-index:3;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  display:flex;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  z-index: 10;
  border-radius: 4px;

  @media screen and (max-width:768px) {
    width:300px;
  }
`;



export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  
`;

export const Form = styled.form`
  width:100%;

  display:flex;
  flex-direction:column;

  @media screen and (max-width:768px) {
    width:300px;
  }

  
`

export const InteractionForm = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px;

  
`
