import { useState } from "react";
import PropTypes from 'prop-types';



const FoodServices = ({ handleFoodCategory, handleNumOfDays, calculateFoodExpenses, foodPrice, howManyDays, selectedOptions, submittedFood }) => {
    const [showAdditionalInfo, setAdditionalInfo] = useState(false)
    

    const handleCheckBox = () => {
        setAdditionalInfo(!showAdditionalInfo)
    }

    // const handleFoodCategory = (e) => {
    //     setSelectedOptions(e.target.value);
    //     if(e.target.value === "kangal voj") setFoodPrice(50)
    //     else if (e.target.value === "Shahi voj") setFoodPrice(100)
    // }
    console.log(foodPrice)


    return (
        <section className='border p-4 rounded-md space-y-3 min-h-44'>
            <input type="checkbox" checked={showAdditionalInfo} onChange={handleCheckBox} className="checkbox mr-4" />
            <label htmlFor="travel" className='text-xl font-semibold border-b-2 border-black inline-block'>Catering service</label>

            {
                showAdditionalInfo ?
                    <div>
                        <div className="mb-3">
                            <h3 className="text-xl font-semibold"> would you  prefer Catering service</h3>
                            <select onChange={handleFoodCategory} className="select select-ghost w-full max-w-xs p-2 bg-gray-300">
                                <option defaultValue={true}>Select service</option>
                                <option>kangal voj</option>
                                <option>Shahi voj</option>

                            </select>
                            {
                                selectedOptions === 'kangal voj' ? <>
                                <p>
                                    kangal voj 25+ bangaliyana items eat whatever you want!
                                </p>
                                </> :  selectedOptions === 'Shahi voj'? <>
                                <p> 
                                    shahi voj is for 10+ people and they will provide food according to the number of people
                                </p> 
                             
                                </>: null
                            }
                        </div>
                        <div>
                            {
                                foodPrice> 0 ? <p>for one person {foodPrice}$</p>: ''
                            }

                            <div>
                                <label className="label-text mx-2 font-medium">
                                    for how many days :
                                    <input className="py-1 px-4 rounded-lg" type="number" value={howManyDays} onChange={handleNumOfDays} />
                                </label>
                            </div>
                            <button className="label-text font-medium px-3 py-1 border rounded-2xl" onClick={ calculateFoodExpenses}>{
                            submittedFood ? 'Submitted' : 'Submit'
                        }</button>
                        </div>
                    </div> : ''
            }
        </section>
    );
};
FoodServices.propTypes = {
    handleFoodCategory: PropTypes.func,
    handleNumOfDays: PropTypes.func,
    calculateFoodExpenses: PropTypes.func,
    foodPrice: PropTypes.number,
    howManyDays: PropTypes.number,
    selectedOptions: PropTypes.string,
    submittedFood: PropTypes.any
}

export default FoodServices;