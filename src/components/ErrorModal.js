const ErrorModal = (props) => {
  const resetHandler = () => {
    props.onErrorReset();
  };
  return (
    <div>
      <h3>Error Message</h3>
      <p>{props.error}</p>
      <button onClick={resetHandler}>Okay</button>
    </div>
  );
};

export default ErrorModal;
