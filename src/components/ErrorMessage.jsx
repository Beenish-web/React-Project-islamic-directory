function ErrorMessage({ message }) {
  return (
    <h2 style={{ color: "red", padding: "20px" }}>
      {message}
    </h2>
  );
}

export default ErrorMessage;