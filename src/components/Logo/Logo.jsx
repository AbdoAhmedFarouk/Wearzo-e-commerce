import { PropTypes } from 'prop-types';

Logo.propTypes = {
  styles: PropTypes.string,
  img: PropTypes.string,
};

function Logo({ img, styles }) {
  const defaultStyle =
    'w-[100px] xs:w-[120px] sm:w-[130px] lg:w-[150px] 2xl:w-[203.33px]';
  return (
    <a href="#">
      <img className={styles ? styles : defaultStyle} src={img} alt={img} />
    </a>
  );
}

export default Logo;
