import React from 'react'
import dogCode from '../../assets/images/dogCode.png';

const SectionDivOne = () => {
    return (
        <div className="homeSectionOne py-3">
            <div className="container">
                <h2> &lt;section&gt;</h2>
                <div className="d-flex flex-wrap">
                    <div className=" d-flex flex-wrap">
                        <img src={dogCode} alt="dog code"></img>
                    </div>
                    <div className="my-auto col-6">
                        <h1>SectionDivCorgi</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>

                </div>


                <h2 className = "margin8px"> &lt;/section&gt;</h2>

            </div>
        </div>
    )
}

export default SectionDivOne
