const Box = (props) => {
  //  Write your code here.
  const { className, message } = props;
  const containerClassName = `box-container ${className}`;
  return (
    <div className={containerClassName}>
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="box-bg-container">
    <h1 className="box-heading">Boxes</h1>
    <div className="box-list">
      <Box className="box1" message="small" />
      <Box className="box2" message="Medium" />
      <Box className="box3" message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
