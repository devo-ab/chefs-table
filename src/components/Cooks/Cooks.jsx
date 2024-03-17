import PropTypes from "prop-types";
import Cook from "../Cook/Cook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking"


const Cooks = ({ cooks, handleAddToCooking, cooking, totalTime, totalCalories}) => {
  return (
    <div className="border border-[#28282833] rounded-2xl mt-8 w-[500px]">
      <h3 className="text-[#282828] text-2xl font-semibold leading-7 text-center mt-4">
        Want to cook: {cooks.length}
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
            {cooks.map((cook, idx) => (
              <Cook key={idx} cook={cook} idx={idx} handleAddToCooking={handleAddToCooking}></Cook>
            ))}
          </tr>
        </tbody>
      </table>

      <CurrentlyCooking cooking={cooking} totalTime={totalTime} totalCalories={totalCalories}> </CurrentlyCooking>
    </div>
  );
};

Cooks.propTypes = {
  cooks: PropTypes.object.isRequired,
  handleAddToCooking: PropTypes.func.isRequired,
  cooking: PropTypes.object.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired
};

export default Cooks;
