import PropTypes from 'prop-types';

const Cook = ({cook, handleAddToCooking}) => {
    const {recipe_name, preparing_time, calories} = cook;
    return (
        
        <div className="flex gap-[60px]">
            
            <td></td>
            <td>{recipe_name}</td>
            <td >{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td><button onClick={() => handleAddToCooking(cook)} className=" bg-[#0BE58A] border-none rounded-3xl text-[#150B2B] ">Preparing</button></td>
            
        </div>                                  
    );
};

Cook.propTypes = {
    cook: PropTypes.object.isRequired,
    handleAddToCooking: PropTypes.func.isRequired,
}

export default Cook;