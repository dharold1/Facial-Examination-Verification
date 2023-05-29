import { Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Footer } = Layout;
export default () => (
  <Footer style={{ textAlign: 'center' }}>
    <span>&copy; University of Abuja {new Date().getFullYear()}</span>
    <span>&nbsp;&nbsp;&nbsp; <Link to="/">Privacy Policy</Link></span>
    <span>&nbsp;&nbsp;&nbsp; <Link to="/">Term & Condition</Link></span>
    <span>&nbsp;&nbsp;&nbsp; <Link to="/">User Guidelines</Link></span>
  </Footer>
);
