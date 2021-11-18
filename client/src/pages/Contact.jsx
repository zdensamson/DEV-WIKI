import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="container">
                <form>
                    <div className="form-floating mb-3 mt-3">
                        <input type="email" className="form-control" id="contactEmail" aria-describedby="emailHelp" />
                        <label htmlFor="contactEmail" id="contactEmail">Email address</label>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <div className="form-floating mb-3">
                        <textarea type="text" className="form-control" id="message"></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}