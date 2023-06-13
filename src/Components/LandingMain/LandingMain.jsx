import React, { useEffect } from 'react';
import { GoAlert } from 'react-icons/go';
import { GiConsoleController } from 'react-icons/gi';
import styled from '@emotion/styled';
import StyledLandingMain from './StyledLandingMain'; // styled.section

const StyleAlert = styled(GoAlert)`
  font-size: 100px;
  color: orange;
`;

const StyledVG = styled(GiConsoleController)`
  font-size: 100px;
`;

export default function LandingMain() {
  const [path, setPath] = React.useState({
    index: 0,
    src: 'https://e0.pxfuel.com/wallpapers/913/585/desktop-wallpaper-luffy-dark-dark-luffy.jpg',
  });

  const generatePaths = () => {
    const arrPaths = [
      'https://e0.pxfuel.com/wallpapers/913/585/desktop-wallpaper-luffy-dark-dark-luffy.jpg',
      'https://images.idgesg.net/images/article/2019/06/dark_web_dark_net_warning_sign_alert_caution_danger_by_thomas-bethge_gettyimages-1151411167_black_and_yellow_warning_stripes_background_by_croc80_gettyimages-483040586_2400x1600-100800632-large.jpg?auto=webp&quality=85,70',
      'https://e0.pxfuel.com/wallpapers/443/886/desktop-wallpaper-sunset-dark-theme-minimal-nature-dark-minimalist-theme-sun.jpg',
    ];

    setPath((prev) => {
      const index = prev.index === arrPaths.length - 1 ? 0 : prev.index + 1;

      return { index, src: arrPaths[index] };
    });
  };

  useEffect(() => {
    const intId = setInterval(() => {
      generatePaths();
    }, 1800);

    return () => clearInterval(intId);
  }, []);

  return (
    <StyledLandingMain>
      <div className="col_1">
        <h3>Some header</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni
          expedita exercitationem ut eius eligendi non officiis dignissimos
          deleniti distinctio libero necessitatibus ducimus nam, odit
          repudiandae! Consequuntur asperiores aperiam atque natus quaerat earum
          veritatis, ipsa libero, beatae doloribus blanditiis tempora et! Sunt
          nulla, tempora odio accusantium quidem hic vitae quasi?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          cupiditate distinctio alias. Blanditiis voluptas nostrum nam quisquam,
          laudantium aliquam quia excepturi dicta vel, pariatur eos repellat,
          eius ratione eligendi quis voluptatum odit. Atque officiis,
          exercitationem labore fuga ex, eveniet reprehenderit neque libero in
          vitae ullam ab recusandae dignissimos explicabo minus.
        </p>

        <div className="icons">
          <StyleAlert />
          <StyledVG />
        </div>
      </div>

      <div className="col_2">
        <div
          className="image"
          style={{
            backgroundImage: `url(${path.src})`,
          }}
        />
      </div>
    </StyledLandingMain>
  );
}
