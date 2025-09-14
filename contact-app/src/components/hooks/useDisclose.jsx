import { useState } from "react";

function useDisclose() {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return { isOpen, onOpen, onClose };
}

export default useDisclose;
