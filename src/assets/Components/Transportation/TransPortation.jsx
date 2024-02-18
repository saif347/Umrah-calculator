

const TransPortation = () => {
    return (
        <section className='border p-4 rounded-md space-y-3 min-h-44'>
            <input type="checkbox" className="checkbox mr-4" />
            <label htmlFor="travel" className='text-xl font-semibold border-b-2 border-black inline-block'>Transportation</label>

            <div>
                <h3 className='text-xl font-semibold'>Car type</h3>
                <select className="select select-ghost w-full max-w-xs p-2 bg-gray-300">
                    <option disabled selected>sedan</option>
                    <option>micro bus</option>
                    <option>van</option>

                </select>
            </div>

            <div>
                <h3 className='text-xl font-semibold'>Price list:</h3>
                <div className='flex items-center gap-2'>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2 font-medium">per day <span> 15$</span></span>
                            <input type="radio" name="transit" className="radio" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2 font-medium">package for (5days) <span>55$</span> </span>
                            <input type="radio" name="transit" className="radio" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2 font-medium">package for (15days) <span>115$</span></span>
                            <input type="radio" name="transit" className="radio" />
                        </label>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TransPortation;