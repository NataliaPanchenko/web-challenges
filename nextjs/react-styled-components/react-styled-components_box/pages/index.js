import styled from "styled-components";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";

const BoxWrapper = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <BoxWrapper>
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </BoxWrapper>
  );
}
