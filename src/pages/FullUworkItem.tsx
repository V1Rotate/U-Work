import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullUworkItem: React.FC = () => {
  const [uWorkItem, setUworkItem] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchUworkItem() {
      try {
        const { data } = await axios.get(
          'SECRET_API_URL' + id
        );
        setUworkItem(data);
      } catch (error) {
        alert('Error with fetching U-Work Equipment Items');
        navigate('/');
      }
    }

    fetchUworkItem();
  }, []);

  if (!uWorkItem) {
    return <>Loading ...</>;
  }

  return (
    <div className='fullUworkItem-container'>
      <img
        className='fullUworkItem-container_img'
        src={uWorkItem.imageUrl}
        alt='U-WORK Item'
      />
      <h2 className='fullUworkItem-container_title'>{uWorkItem.title}</h2>
      <p className='fullUworkItem-container_note'>
        <span className='fullUworkItem-container_span'>
          Brief Specification:
        </span>{' '}
        Nominal lifting weight - 250kg; Unit weight - 515kg; Operating speed -
        up to 7 km\h; Max lifting height - 2,014mm; Dimensions:
        1,554*750*1,240mm; Tires - 20x4.00-10; Drivetrain - 4WD; Engine Power -
        15 hp; Transmission - Hydrostatic; Hydraulic system pressure - 190bar;
        Fuel tank - 6.5l.
      </p>
      <h4 className='fullUworkItem-container_price'>
        $ {uWorkItem.price} / 1 Day{' '}
      </h4>
      <p className='optional'>
        NOTE: Transportation to site, fuel are optional (Please contact us).
      </p>
      <Link to='/'>
        <button className='button button--outline button--add'>
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};

export default FullUworkItem;
