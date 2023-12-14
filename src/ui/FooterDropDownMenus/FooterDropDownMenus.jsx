// eslint-disable-next-line react/prop-types
function FooterDropDownMenus({ isOpen, children, styles }) {
  return (
    <>
      {isOpen ? (
        <div
          className={`visible relative overflow-hidden
          opacity-100 duration-500 md:hidden ${styles ? styles : ''}
        `}
        >
          {children}
        </div>
      ) : (
        <div
          className={`invisible h-0 overflow-hidden
          opacity-0 duration-500 md:hidden`}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default FooterDropDownMenus;
