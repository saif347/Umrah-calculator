

const FlightBooking = () => {
    return (
        <section className='border p-4 rounded-md space-y-3'>
            <input type="checkbox" className="checkbox mr-4" />
            <label htmlFor="travel" className='text-xl font-semibold border-b-2 border-black inline-block'>Flight Booking</label>

            <div>
                <h3 className='text-xl font-semibold'>Flight class</h3>
                <div className='flex items-center gap-8'>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2 font-medium">Economy</span>
                            <input type="radio" name="flight-class" className="radio" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2 font-medium">Business Class</span>
                            <input type="radio" name="flight-class" className="radio" />
                        </label>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='text-xl font-semibold'>Max transit</h3>
                <div className='flex items-center gap-2'>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2 font-medium">Direct (no transit)</span>
                            <input type="radio" name="transit" className="radio" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2 font-medium">3h</span>
                            <input type="radio" name="transit" className="radio" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2 font-medium">6h</span>
                            <input type="radio" name="transit" className="radio" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2 font-medium">12+h</span>
                            <input type="radio" name="transit" className="radio" />
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlightBooking;