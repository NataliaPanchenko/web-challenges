import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onAllOff, onAllOn }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={onAllOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={onAllOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
