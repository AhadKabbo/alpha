import React, { useState } from 'react';
import { navlogo } from '../Info/Data';
import ForgotPassword from './ForgotPassword';

const ForgetInfo = () => {
  return (
    <>
      <ForgotPassword {...navlogo} />
    </>
  );
};

export default ForgetInfo;
