import { useQueries } from 'react-query';
import queryKey from '@/constants/queryKey';
import { getPostDetail } from '@/api/post.api';
import Loader from '@/components/common/loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { getCommentList } from '@/api/comment.api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
import { onImgError } from '@/utils/onImgError';
import { MouseEventHandler, useEffect, useState } from 'react';

export const PostSlide = () => {
  const postId = useParams().id || '';
  const navigate = useNavigate();
  const [currSlideNumber, setCurrSlideNumber] = useState(0);
  const [currCommentNumber, setCurrCommentNumber] = useState(0);

  const [{ data: postData }, { data: commentData }] = useQueries([
    { queryKey: queryKey.getPostDetail, queryFn: () => getPostDetail(postId) },
    { queryKey: queryKey.getCommentList, queryFn: () => getCommentList(postId) },
  ]);

  useEffect(() => {
    if (!commentData?.length) return;
    const intervalComment = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * commentData.length);
      setCurrCommentNumber(randomIndex);
    }, 10 * 1000);

    return () => clearInterval(intervalComment);
  }, [commentData]);

  const onClickBackground: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget) navigate(-1);
  };

  const slideImage = postData?.image;
  const settings = {
    dots: true,
    pauseOnFocus: true,
    autoplaySpeed: 16 * 1000,
    autoplay: true,
    arrows: false,
    afterChange: (num: number) => setCurrSlideNumber(num),
  };

  if (!slideImage) return <Loader />;
  return (
    <SliderWrapper src={slideImage[currSlideNumber]} onClick={onClickBackground}>
      <div>
        <CustomSlider {...settings}>
          {postData.image.map((img, idx) => {
            return <img src={img} key={idx} onError={onImgError}></img>;
          })}
        </CustomSlider>
      </div>
      {commentData?.length && (
        <CommentsWrapper>
          <CommentBody>{commentData[currCommentNumber].body}</CommentBody>
          <CommentInfo>{commentData[currCommentNumber].nickname}</CommentInfo>
        </CommentsWrapper>
      )}
    </SliderWrapper>
  );
};

const CommentsWrapper = styled.div`
  padding: 8vh 10vw;
`;

const CommentBody = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: white;
  text-align: center;
  min-height: 60px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const CommentInfo = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  text-align: end;
  padding: 8px 8px 0 8px;
`;

const SliderWrapper = styled.div<{ src: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    center url(${({ src }) => src});
  background-size: cover;
  > div {
    width: 90%;
  }
`;

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
