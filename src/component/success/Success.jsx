import "./success.scss";

const Success = ({ success, setSuccess }) => {
  return (
    <div className="success">
      <div className="container">
        <h2>Thank You for Joining</h2>
        <p>
          Your email has been added to our waiting list and you’d be the first
          to know when we launch
        </p>
        <button onClick={() => setSuccess(!success)}>
          Back to where you came from
        </button>
      </div>
    </div>
  );
};

export default Success;
