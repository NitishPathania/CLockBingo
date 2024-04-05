import React from 'react'
import NavOne from './Components/NavBars/NavOne'
import SliderAll from './Components/Slider/SliderAll'
import ChildCard from './Components/Cards/ChildCard'
import ParentCard from './Components/Cards/ParentCard'
import Mobile from './Components/MobileComp/MobileParent'
import MobileParent from './Components/MobileComp/MobileParent'
import MobileChild from './Components/MobileComp/MobileChild'
import ParentDal from './Components/DalComp/ParentDal'
import ParentBike from './Components/BikeComp/ParentBike'
import TvParent from './Components/TvComp/TvParent'
import Footer from './Components/FooterComp/Footer'
import Button from './Components/ButtonComp/Button'
import NavBarTwo from './Components/NavBars/NavBarTwo'
import Deals from './Components/Deals/Deals'
import Sign from './Components/SignPage/Sign'

const MainPage = () => {
  return (
    <div>
        <NavOne/>
        <NavBarTwo/>
        <SliderAll/>
        <ParentCard/>
        <MobileParent/>
        <ParentDal/>
        <ParentBike/>
        <TvParent/>
        <Deals/>
        <Button/>
        <Footer/>
        
        </div>
  )
}

export default MainPage