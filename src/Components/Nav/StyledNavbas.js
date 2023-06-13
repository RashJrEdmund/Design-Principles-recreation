import styled from '@emotion/styled';

const StyledNavBar = styled.nav`
  background-color: transparent;
  color: #000;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: min(97vw, 1224px);
  margin: 20px auto;

  .section_1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    gap: min(30vw, 300px, 5rem);

    #logo {
      font-weight: 700;
      font-size: 2.1rem;
    }

    ul {
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 25px;

      li {
        list-style: none;
        cursor: pointer;
      }
    }
  }

  .cta {
    button {
      background-color: transparent;
      color: #000;
      font-weight: 600;
      font-size: 17px;
      padding: 12px 30px;

      &:nth-of-type(2) {
        background-color: #000;
        color: #fff;
        margin: 0 0 0 20px;
      }
    }
  }
`;

export default StyledNavBar;