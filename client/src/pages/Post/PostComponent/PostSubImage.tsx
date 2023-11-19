import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

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
        return <img src={img} key={idx}></img>;
      })}
    </CustomSlider>
  );
};

const CustomSlider = styled(Slider)`
  .slick-list {
    height: 100%;
    max-height: 300px;
    display: flex;
    align-items: center;
  }
  .slick-track {
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
  }
  .slick-slide > div {
    display: flex;
    justify-content: center;

    & > img {
      max-width: 500px;
    }
  }
  .slick-dots > li {
    width: 10px;
  }
`;
