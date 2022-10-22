import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

type ApplicationItemBlockProps = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

export const ApplicationItemBlock: React.FC<ApplicationItemBlockProps> = ({
  id,
  title,
  subtitle,
  imageUrl,
}) => {
  const dispatch = useDispatch();

  return (
    <div className='applicationItem-block-wrapper'>
      <div className='applicationItem-block'>
        <Link key={id} to={`/applicationItem/${id}`}>
          <img
            className='applicationItem-block_image itemImg'
            src={imageUrl}
            alt='U-Work Item'
          />
          <h4 className='applicationItem-block__title applicationItem-title'>
            {title}
          </h4>
          <h2 className='applicationItem-block__title applicationItem-subTitle'>
            {subtitle}
          </h2>
        </Link>
      </div>
    </div>
  );
};
