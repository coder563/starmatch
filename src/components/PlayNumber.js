const PlayNumber = (props) => (
  <>
    <button className="number"
       
      onClick={() => console.log("Num = ", props.PlayStatus)}
    >
      {props.PlayStatus}
    </button>
  </>
);

export default PlayNumber;
