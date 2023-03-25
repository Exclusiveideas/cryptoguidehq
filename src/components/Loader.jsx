import React from 'react';
import { Spin } from 'antd';
import "@styles/loader.css"

const Loader = () => (
  <div className="loader_wrapper">
    <Spin size='large' />
  </div>
);

export default Loader;