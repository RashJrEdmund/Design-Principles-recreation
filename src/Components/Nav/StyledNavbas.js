import styled from '@emotion/styled';

const StyledNavBar = styled.nav`
  background-color: transparent;
  color: #fff;
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
      color: #fff;
      font-weight: 600;
      font-size: 17px;
      padding: 12px 30px;
      border: 1px solid transparent;
      transition: 300ms;

      &.login_btn {
        border-bottom: 1px solid #fff;
        border-left: 1px solid #fff;

        &:hover {
          border-top: 1px solid #fff;
          border-right: 1px solid #fff;
          color: #ffa500;
        }
      }

      &.signup_btn {
        background-color: #000;
        margin: 0 0 0 20px;

        &:hover {
          background-color: #000000cc;
          color: #ffa500;
        }
      }
    }
  }
`;

export default StyledNavBar;
