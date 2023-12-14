// eslint-disable-next-line react/prop-types
function Container({ children, styles }) {
  return (
    <div className={`my-container ${styles ? styles : ''}`}>{children}</div>
  );
}

export default Container;
