import React from 'react'

const Contact = () => {
    return (
        <section className="contact">
            <h2 className="section__title contact__title" id="contact">Contact Us with any queries</h2>
            <div className="contact__card">
                <div className="contact__card--left">

                <h3 className="contact__card--title">contact form</h3>
                <div className="contact__card--input-container">
                <input className="contact__card--input-name" name="name" autoComplete="none" placeholder="Enter Name"/>
                <label className="contact__card--input-label" htmlFor="name" autoComplete="none" >Enter Name</label>

                </div>
                <div className="contact__card--input-container">

                <input className="contact__card--input-email" name="email" placeholder="Enter Email"/>
                <label className="contact__card--input-label" htmlFor="email" >Enter email</label>
                </div>

                </div>
                <div className="contact__card--right">
                    <textarea rows="9" cols="80" className="contact__card--input-message" name="message" placeholder="Enter Query" ></textarea>
                <a href="!#" className="contact__card--submit" type="submit">Submit</a>
                </div>

            </div>
        </section>
    )
}

export default Contact
