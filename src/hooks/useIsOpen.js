export function useIsOpen(isOpen, setIsOpen) {
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return handleOpen;
}
