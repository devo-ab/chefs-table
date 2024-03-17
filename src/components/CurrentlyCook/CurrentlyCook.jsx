import PropTypes from "prop-types";

const CurrentlyCook = ({cook, idx}) => {
    const {recipe_name, preparing_time, calories} = cook;
    return (
        <div className="flex gap-12 p-4">
            <td>{idx + 1}</td>
            <td>{recipe_name}</td>
            <td >{preparing_time} minutes</td>
            <td>{calories} calories</td>
        </div>
    );
};

CurrentlyCook.propTypes = {
    cook: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
  };

export default CurrentlyCook;