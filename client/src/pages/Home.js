import React from 'react'
import HeaderDiv from '../components/Home/HeaderDiv';
import SectionDivOne from '../components/Home/SectionDivOne';
import SectionDivTwo from '../components/Home/SectionDivTwo';



const Home = () => {


    return (
        <div className="home  text-light">
            <HeaderDiv></HeaderDiv>
            <SectionDivOne></SectionDivOne>
            <SectionDivTwo></SectionDivTwo>
        </div>

    )
}

export default Home
