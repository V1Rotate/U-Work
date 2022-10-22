import React from 'react';

const ContactUsLine: React.FC = () => {
  return (
    <div className='contactUs-content'>
      <h4 className='contactUs-content__contactUs contactUsElement'>
        Contact Us
      </h4>
      <h4 className='contactUs-content__saveTime contactUsElement'>
        Save Time! Request a Callback
      </h4>
      <h3 className='contactUs-content__phoneNumber contactUsElement'>
        1-800-GO-U-WORK<span>®</span>
      </h3>
    </div>
  );
};

export default ContactUsLine;
