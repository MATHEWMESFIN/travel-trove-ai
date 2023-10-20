import '../style/FlightSearch.css'

export default function FlightSearch() {
    return (
        <div className="container">
            <div className="card custom-bg w-75 p-4 d-flex">
                <div className="row">
                    <div className="pb-3 h3 text-left">Flight Search &#128747;</div>
                </div>
                <form id="flight-form" onSubmit="return validateForm()">
                    <div className="row">
                        <div className="form-group col-md align-items-start flex-column">
                            <label htmlFor="origin" className="d-inline-flex">From</label>
                            <input type="text" placeholder="City or Airport" className="form-control" id="origin" name="origin"
                                required></input>
                        </div>
                        <div className="form-group col-md align-items-start flex-column">
                            <label htmlFor="depart" className="d-inline-flex">To</label>
                            <input type="text" placeholder="City or Airport" className="form-control" id="depart" name="depart"
                                required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md align-items-start flex-column">
                            <label htmlFor="departure-date" className=" d-inline-flex">Depart</label>
                            <input type="date" className="form-control" id="departure-date" name="departure-date"
                                onClick="return false" required></input>
                        </div>
                        <div className="form-group col-md align-items-start flex-column">
                            <label htmlFor="return-date" className="d-inline-flex">Return</label>
                            <input type="date" placeholder="One way" value=""
                                onChange="this.setAttribute('value', this.value)" className="form-control" id="return-date"
                                name="return-date"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-3 align-items-start flex-column">
                            <label htmlFor="adults" className="d-inline-flex col-auto">Adults <span className="sublabel"> 12+
                                </span></label>
                            <select className="form-select" id="adults"
                                onChange="javascript: dynamicDropDown(this.options[this.selectedIndex].value);">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>
                        <div className="form-group col-lg-3 align-items-start flex-column">
                            <label htmlFor="children" className="d-inline-flex col-auto">Children <span className="sublabel"> 2-11
                                </span></label>
                            <select className="form-select" id="children">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="form-group col-lg-3 align-items-start flex-column">
                            <label htmlFor="infants" className="d-inline-flex col-auto">Infants <span className="sublabel"> less than
                                    2</span></label>
                            <select className="form-select" id="infants">
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-6 align-items-start flex-column">
                            <label htmlFor="cabin" className="d-inline-flex">Cabin</label>
                            <select className="form-select" id="cabin">
                                <option value="ECONOMY">Economy</option>
                                <option value="PREMIUM_ECONOMY">Premium Economy</option>
                                <option value="BUSINESS">Business</option>
                                <option value="FIRST">First</option>
                            </select>
                        </div>
                        <div className="form-group col-lg-6 align-items-start flex-column pt-lg-4">
                            <div className="form-check form-switch">
                                <input className="form-check-input align-self-center" type="checkbox" id="directFlights"></input>
                                <label className="form-check-label d-inline-flex align-self-center" htmlFor="directFlights">Direct
                                    flights</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-left col-auto">
                            <button type="submit" className="btn btn-primary">Search flights</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}