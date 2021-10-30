import React, { useState } from 'react';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

// Components
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  // Hooks
  // -- state
  const [isOpen, setIsOpen] = useState(false);

  // Custom functions
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button action={openModal} text='Sign up' />
      {isOpen && (
        <Modal onClose={closeModal}>
          <RegistrationForm />
        </Modal>
      )}
    </>
  );
}

export default App;
