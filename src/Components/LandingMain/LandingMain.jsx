import React, { useEffect } from 'react';
import { GoAlert } from 'react-icons/go';
import { GiConsoleController } from 'react-icons/gi';
import styled from '@emotion/styled';
import StyledLandingMain from './StyledLandingMain'; // styled.section
import SlidData from '../../Data/Slide.json';

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
    name: 'One Piece',
  });

  const generatePaths = () => {
    setPath((prev) => {
      const index = prev.index === SlidData.length - 1 ? 0 : prev.index + 1;

      return { index, src: SlidData[index].img, name: SlidData[index].name };
    });
  };

  useEffect(() => {
    const intId = setInterval(() => {
      generatePaths();
    }, 3500);

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
