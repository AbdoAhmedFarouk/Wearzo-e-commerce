// eslint-disable-next-line react/prop-types
function SectionTag({ children, styles }) {
  return <section className={`${styles ? styles : ''}`}>{children}</section>;
}

export default SectionTag;
