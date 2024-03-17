import PropTypes from "prop-types";
import CurrentlyCook from "../CurrentlyCook/CurrentlyCook";

const CurrentlyCooking = ({cooking, totalTime, totalCalories}) => {
  return (
    <div className="mt-10">
      <h3 className="text-[#282828] text-2xl font-semibold leading-7 text-center mt-4">
      Currently cooking : {cooking.length}
      </h3>
      <hr className="w-80  mx-auto mt-3" />

      <table className="mt-3">
      <thead>
          <tr className="flex gap-20 text-[#878787] font-medium leading-5">
            <th></th>
            <th>Name</th>
            <th className="">Time</th>
            <th className="">Calories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr className="text-[#282828B2]  bg-[#28282808] space-y-3">
            {cooking.map((cook, idx) => (
              <CurrentlyCook key={idx} idx={idx} cook={cook}></CurrentlyCook>
            ))}
            </tr>
        </tbody>
      </table>

      <div className=" mt-12 w-[245px] flex gap-6 text-[#282828CC] mx-auto">
        <p>Total Times = {totalTime} minutes</p>
        <p>Total Calories = {totalCalories} calories</p>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {
    cooking: PropTypes.object.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalCalories: PropTypes.number.isRequired
  };

export default CurrentlyCooking;
