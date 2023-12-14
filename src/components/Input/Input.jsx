// eslint-disable-next-line react/prop-types
function Input({ styles, type, id, name, required, placeholder }) {
  const defaultStyles = `max-h-10 w-full border
  border-fourthColor px-[15px] py-2.5
  text-primaryColor outline-0`;

  return (
    <input
      className={styles ? styles : defaultStyles}
      type={type ? type : 'text'}
      id={id && id}
      name={name && name}
      required={required && required}
      placeholder={placeholder && placeholder}
    />
  );
}

export default Input;
