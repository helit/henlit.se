import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Intro = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex: 1;
  padding: 16px;
  gap: 8px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
`;

export const Image = styled.img`
  border-radius: 50%;
  max-width: 80%;
  border: 5px solid #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;
