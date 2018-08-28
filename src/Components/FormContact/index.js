import React from 'react';

const ContactForm = () => {
    return (
            <form className="w-60-l center">
                <div className="form-group row">
                    <label  className="col-sm-3 col-form-label f4-l">Name</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control form-control-lg" id="name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label f4-l">Company</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control form-control-lg" id="company" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label f4-l">Email</label>
                    <div className="col-sm-9">
                        <input type="email" className="form-control form-control-lg" id="inputEmail3" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label f4-l">Message</label>
                    <div className="col-sm-9">
                        <textarea className="form-control form-control-lg" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="d-none d-md-block col-sm-3 col-form-label">&nbsp;</label>
                    <div className="col-sm-9">
                        <button type="submit" className="f4 bw0 link dim ph3 pv2 mb2 dib white bg-orange-cus">Submit</button>
                    </div>
                </div>
            </form>
    );
}

export default ContactForm;