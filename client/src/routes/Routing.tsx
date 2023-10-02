import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import Home from '@/pages/Home/Home';
import Layout from '@/components/common/other/Layout';
import PostCreate from '@/pages/Post/PostCreate';

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post">
          <Route path="create" element={<PostCreate />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;
