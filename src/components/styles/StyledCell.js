import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  background: ${(props) =>
    props.value === 0
      ? "rgba(238, 228, 218, 0.35)"
      : props.value === 2
      ? "#eee4da"
      : props.value === 4
      ? "#faf8ef"
      : props.value === 8
      ? "#f2b179"
      : props.value === 16
      ? "#f59563"
      : props.value === 32
      ? "#f67c5f"
      : props.value === 64
      ? "#f65e3b"
      : props.value === 128
      ? "#edcf72"
      : props.value === 256
      ? "#edcc61"
      : props.value === 512
      ? "#edc850"
      : props.value === 1024
      ? "#edc53f"
      : "#edc22e"};
  ${(props) =>
    props.value === 1024
      ? "box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.476)"
      : props.value === 2048
      ? "box-shadow:0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333)"
      : ""};
  border: 3px solid;
  border-color: rgba(191, 191, 191, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: ${(props) => (props.value <= 4 ? "slategrey" : "white")};
    font-size: x-large;
    font-weight: bold;
  }
`;
