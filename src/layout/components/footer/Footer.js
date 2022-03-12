import React from 'react';

import Breadcrumbs from './Breadcrumbs';
import classNames from '../../../utils/class-names';
import FooterLoader from './FooterLoader';

import './Footer.scss';

const Footer = ({boxed, loaded = false, layout, breadcrumbs, openModal}) => {
  let footerClasses = classNames({
    loaded,
    boxed
  });

  return (
    <div className={`footer ${footerClasses}`}>
      <div className='footer-wrap'>
        <div className='row align-items-center' style={{ height: '100%' }}>
          <div className='col-12 col-md-6 d-none d-md-block'>
            <Breadcrumbs layout={layout} breadcrumbs={breadcrumbs} />
          </div>

          <div className='col-12 col-md-6 text-right'>
            <div className='d-flex align-items-center justify-content-center justify-content-md-end'>
              <span>Version 1.0.0</span>
              <button className='no-style ml-2' onClick={openModal}>
                <i
                  className='icofont icofont-ui-settings'
                  style={{ fontSize: 26, color: '#336cfb' }}
                />
              </button>
            </div>
          </div>
        </div>

        <FooterLoader />
      </div>
    </div>
  );
};

export default Footer;
