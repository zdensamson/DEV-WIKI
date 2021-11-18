import React from 'react'

export default function Contact() {
    
    return (
        <div className = "loginPage">
            <div className="container">
                <form>
                    <div className="form-floating mb-3 pt-3 col-sm-5 d-flex justify-center flex-wrap">
                        <input type="email" className="form-control" id="contactEmail" aria-describedby="emailHelp" />
                        <label className = "mt-3" htmlFor="contactEmail" id="contactEmail">Email address</label>
                        <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="form-floating mb-3 col-sm-5">
                        <textarea type="text" className="form-control" id="message"></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
            </div>
        </div>
    )
}