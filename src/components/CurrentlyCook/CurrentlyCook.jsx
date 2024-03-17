import PropTypes from "prop-types";

const CurrentlyCook = ({cook}) => {
    const {recipe_name, preparing_time, calories} = cook;
    return (
        <div className="flex gap-12">
            <td></td>
            <td>{recipe_name}</td>
            <td >{preparing_time} minutes</td>
            <td>{calories} calories</td>
        </div>
    );
};

CurrentlyCook.propTypes = {
    cook: PropTypes.object.isRequired
  };

export default CurrentlyCook;