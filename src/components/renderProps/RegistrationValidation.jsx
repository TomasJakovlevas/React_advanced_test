const RegistrationValidation = ({ render }) => {
  // Custom functions
  const validateInput = (input) => {
    console.log(input);
    return input;
  };

  return render(validateInput);
};

export default RegistrationValidation;
