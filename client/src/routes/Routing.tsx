import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import Home from '@/pages/Home/Home';
import Layout from '@/components/common/other/Layout';
import PostCreate from '@/pages/Post/PostCreate';
import { PostList } from '@/pages/Post/PostList/PostList';
import { PostDetail } from '@/pages/Post/PostDetail/PostDetail';
import { PostSlide } from '@/pages/Post/PostSlide/PostSlide';

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post">
          <Route index element={<PostList />} />
          <Route path=":id" element={<PostDetail />} />
          <Route path="slide/:id" element={<PostSlide />} />
          <Route path="create" element={<PostCreate />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;
