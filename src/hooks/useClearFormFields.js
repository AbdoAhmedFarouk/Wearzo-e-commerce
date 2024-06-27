const useClearFormFields = () => {
  const clearFormFields = (...refs) => {
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.value = '';
      }
    });
  };

  return clearFormFields;
};

export default useClearFormFields;
