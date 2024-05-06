import PropTypes from "prop-types";
export const Toggler = ({ rightName, leftName, isToggle, setToggle }) => {
  return (
    <div className=" flex gap-6 text-Very-light-grayish-blue items-center">
      <div>
        <h2>{leftName}</h2>
      </div>
      <button
        className="w-[3.50rem] flex items-center rounded-2xl p-1  bg-gradient-to-r from-Gradient-1  to-Gradient-2 "
        onClick={() => setToggle((preval) => !preval)}
      >
        <div
          className={` rounded-full bg-Very-light-grayish-blue w-6 h-6 p-2 ${
            isToggle ? "ms-auto" : ""
          }`}
        ></div>
      </button>
      <div>
        <h2>{rightName}</h2>
      </div>
    </div>
  );
};
Toggler.propTypes = {
  rightName: PropTypes.string.isRequired,
  leftName: PropTypes.string.isRequired,
  isToggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
};
