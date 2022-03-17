import { useState } from 'react';

export const useModal = (modalName = '', initialValue = false) => {

  const [showModal, setShowModal] = useState(initialValue);

  const show = () => setShowModal(true);
  const hide = () => setShowModal(false);

  return {
    hide,
    show,
    showModal,
  };
};