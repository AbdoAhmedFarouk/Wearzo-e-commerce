import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

Logo.propTypes = {
  styles: PropTypes.string,
  img: PropTypes.string,
};

const defaultStyle =
  'w-[100px] xs:w-[120px] sm:w-[130px] lg:w-[150px] 2xl:w-[203.33px]';

function Logo({ img, styles }) {
  const navigate = useNavigate();

  const handlePageRelodaing = (e) => {
    e.preventDefault();

    navigate('/');
  };

  return (
    <a href="#" onClick={handlePageRelodaing}>
      <img className={styles ? styles : defaultStyle} src={img} alt={img} />
    </a>
  );
}

export default Logo;
