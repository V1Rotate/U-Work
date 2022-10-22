import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <div className='footer section__padding' id='contacts'>
      <div className='footer__links'>
        <div className='footer__links-column link'>
          <h4>Products</h4>
          <p>Wheeled Loaders</p>
          <p>Crawl Loaders</p>
          <p>Excavators</p>
          <p>Trenchers</p>
          <p>Dumpers</p>
        </div>
        <div className='footer__links-companyInfo link'>
          <h4>Company Information</h4>
          <p>About U-Work</p>
          <p>Media Relations</p>
          <p>Social Media Directory</p>
          <p>Careers</p>
          <p>Contacts</p>
        </div>
        <div className='footer__links-partnership link'>
          <h4>Partner With Us</h4>
          <p>Become a Dealer</p>
          <p>Terms and Conditions</p>
          <p>Service Provider/Vendor</p>
          <p>Advertising</p>
          <p>Business Accounts</p>
        </div>
      </div>
      <div className='footer__icons icon'>
        <div className='facebook icon'>
          <FaFacebook />
        </div>
        <div className='instagram icon'>
          <FaInstagram />
        </div>
        <div className='pinterest icon'>
          <FaPinterest />
        </div>
        <div className='twitter icon'>
          <FaTwitter />
        </div>
        <div className='youtube icon'>
          <FaYoutube />
        </div>
      </div>
      <div className='footer__copyright'>
        <p>© 2022 U-Work.</p>
      </div>
    </div>
  );
};
