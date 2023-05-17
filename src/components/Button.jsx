function Button(props) {
  return (
    <>
      {props.default ? (
        <button className="conatiner py-3 px-10 bg-gradient-to-r from-cyan-500 to-blue-500 border round">
          Click
        </button>
      ) : (
        <button className="conatiner bg-neutral-700 py-3 px-5 border text-lime-200">
          Click
        </button>
      )}
    </>
  );
}
export default Button;
