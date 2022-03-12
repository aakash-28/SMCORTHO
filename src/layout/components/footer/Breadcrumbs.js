import React from 'react';

import { NavLink } from 'react-router-dom';

const Breadcrumb = ({ route, title, layout }) => {
  return (
    <li className='item'>
      {route ? (
        <NavLink className='link' replace to={`/${layout}/${route}`}>
          {title}
        </NavLink>
      ) : (
        <span>{title}</span>
      )}
    </li>
  );
};

const Breadcrumbs = ({ breadcrumbs = [], layout }) => {
  const breadcrumbList = breadcrumbs.map(({ title, route }, index) => (
    <React.Fragment key={index}>
      <Breadcrumb title={title} route={route} layout={layout} />
      {index < breadcrumbs.length - 1 && (
        <li>
          <i className='separator icofont icofont-thin-right' />
        </li>
      )}
    </React.Fragment>
  ));

  return <ul className='page-breadcrumbs'>{breadcrumbList}</ul>;
};

export default Breadcrumbs;
