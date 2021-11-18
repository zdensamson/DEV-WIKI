import React from 'react'
import codeGuy from '../../assets/images/codeScreenImg.png';

const HeaderDiv = () => {
    return (
        <div className = "headerDiv py-3">
            <div className="container ">
                <h2 className=""> &lt;header&gt;</h2>
                
                <div className="d-flex flex-wrap">
                    <div className="col-6 my-auto">
                    <h1>Dev-Wiki</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                    <div>
                        <img src={codeGuy} alt="code guy image"></img>
                    </div>

                </div>

                <h2 className=""> &lt;/header&gt;</h2>
            </div>
        </div>
    )
}

export default HeaderDiv

