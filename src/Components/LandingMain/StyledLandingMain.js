import styled from '@emotion/styled';

const StyledLandingMain = styled.section`
  /* background-color: purple; */
  width: min(97vw, 1224px);
  margin: 5rem auto 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 20px;

  .col_1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    color: #fff;

    h3 {
      font-size: 40px;
    }

    p {
      width: 100%;
      text-align: left;
      margin: 2rem 0 0;
      word-wrap: break-word;
      font-weight: 500;
    }

    .icons {
      margin: 5rem 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 100px;
    }
  }

  .col_2 {
    width: 100%;

    .image {
      width: 100%;
      background-image: url('https://e0.pxfuel.com/wallpapers/913/585/desktop-wallpaper-luffy-dark-dark-luffy.jpg');
      background-position: center;
      background-size: cover;
      min-height: 550px;
    }
  }
`;

export default StyledLandingMain;
