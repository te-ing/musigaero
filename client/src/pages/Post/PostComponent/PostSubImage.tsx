import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
import { imageRouter } from '@/utils/formatter';

export const PostSubImage = ({ images }: { images?: string[] }) => {
  if (!images || !images.length) return null;
  const settings = {
    dots: true,
    pauseOnFocus: true,
    autoplaySpeed: 5000,
  };

  return (
    <CustomSlider {...settings}>
      {images.map((img, idx) => {
        return <img src={imageRouter(img)} key={idx}></img>;
      })}
    </CustomSlider>
  );
};

const CustomSlider = styled(Slider)`
  .slick-list {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .slick-track {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slick-dots > li {
    width: 10px;
  }
`;
