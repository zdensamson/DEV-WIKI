import React from 'react'
import girlCode from '../../assets/images/girlCode.png';

const SectionDivTwo = () => {
    return (
        <div className="homeSectionTwo py-3">
            <div className="container">
                <h2> &lt;section&gt;</h2>
                <div className="d-flex flex-wrap">
                    <div className="col-6 my-auto">
                        <h1>SectionDivTwo</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                    <div className="col-6 ">
                        <img src={girlCode} alt="dog code image"></img>
                    </div>


                </div>


                <h2> &lt;/section&gt;</h2>

            </div>
        </div>
    )
}

export default SectionDivTwo
