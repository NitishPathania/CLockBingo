import React from 'react'
import LeftList from '../../Sellers/LeftList'
import ParentBestSeller from '../../Sellers/ParentBestSeller'
import Parenttoys from '../../Sellers/BestToysSeller/Parenttoys'
import ParentMotorBike from '../../Sellers/CarMotorBike/ParentMotorBike'
import ElectronicParent from '../../Sellers/Electronics/ElectronicParent'
import ParentBeauty from '../../Sellers/BeautyBest/ParentBeauty'
import ParentShoes from '../../Sellers/Shoes/ParentShoes'
import Footer from '../../FooterComp/Footer'

const Realeases = () => {
  return (
    <div>
         <div className="container-fluid border main_best_seller_container">
                <div className="row ">
                    <div className="col-md-12">
                        <div className="col-md-6 heading_bestseller">
                            <h3>Amazon Hot New Releases
                            </h3>
                            <p>Our most popular products based on sales. Updated frequently</p>
                        </div>
                        <div className="col-md-6 "></div>
                    </div>
                    <div className="col-md-12 ">
                        <div className="row">
                        <div className="col-md-2 border inner_left_col">
                        <LeftList/>
                            </div>
                       
                        <div className="col-md-10 border ">
                        <ParentBestSeller/>
                        <Parenttoys/>
                         <ParentMotorBike/>
                         <ElectronicParent/>
                        <ParentBeauty/>
                              <ParentShoes/>
                    

                        </div>
                    </div>
                    </div>
                </div>

            </div>
            <div>
           

            <Footer/>
            </div>

    </div>
  )
}

export default Realeases
