import React from 'react';
import PublicLayout from '../../layout/public/Public';

const BaseErrorPage = ({ msg, title, action, bg, subTitle }) => (
  <PublicLayout transparent bgImg={bg}>
    {typeof title === 'string' ? <h1 className='align-middle'>{title}</h1> : title}
    {subTitle ? subTitle : null}
    <p className='text-center'>{msg}</p>

    {action}
  </PublicLayout>
);

export default BaseErrorPage;
