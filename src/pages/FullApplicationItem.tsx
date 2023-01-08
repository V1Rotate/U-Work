import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullApplicationItem: React.FC = () => {
  const [applicationItem, setApplicationItem] = React.useState<{
    imageUrl: string;
    title: string;
    subtitle: string;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchApplicationItem() {
      try {
        const { data } = await axios.get(
          'SECRET_API_URL' + id
        );
        setApplicationItem(data);
      } catch (error) {
        alert('Error with fetching U-Work Equipment Application');
        navigate('/');
      }
    }

    fetchApplicationItem();
  }, []);

  if (!applicationItem) {
    return <>Loading ...</>;
  }

  return (
    <div className='fullApplicationItem-container'>
      <img
        className='fullApplicationItem-container__img'
        src={applicationItem.imageUrl}
        alt='U-WORK Application Industry'
      />
      <h2 className='fullApplicationItem-container__title'>
        {applicationItem.title}
      </h2>
      <h3 className='fullApplicationItem-container__subtitle'>
        {applicationItem.subtitle}
      </h3>
      <div className='fullApplicationItem-container__note'>
        <p className='fullApplicationItem-container__note-question'>
          Why U-Work Equipment helps in many industries and appications?
        </p>
        <p className='fullApplicationItem-container__note-answer'>
          Because U-Work Equipment has a number of unique advantagies and
          features:
        </p>
        <ul>
          <li>
            <span>It is super compact</span> - It goes through a man door;
          </li>
          <li>
            <span>It is lightweight</span> - Equipment can be used on grass
            safely because of its low ground pressure;{' '}
          </li>
          <li>
            <span>It is easy to transport to site</span> - Can be transported by
            a truck with a tralier;
          </li>
          <li>
            <span>It is easy to operate</span> - simple controls, no need for
            education;
          </li>
          <li>
            <span>It is versatile</span> - one unit can be applied to many
            tasks, especially with optional acceries;
          </li>
          <li>
            <span>It is economical</span> - U-Work units equipped with Honda
            motors and low fuel consumption.
          </li>
        </ul>
      </div>

      <Link to='/'>
        <button className='button button--outline button--add'>
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};

export default FullApplicationItem;
