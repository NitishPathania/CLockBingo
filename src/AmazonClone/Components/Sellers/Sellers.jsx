import React from 'react'
import "../Sellers/Sellers.css"
import LeftList from './LeftList'
import CardSeller from './CardSeller'
import ParentBestSeller from './ParentBestSeller'
import Parenttoys from '../Sellers/BestToysSeller/Parenttoys'
import ParentMotorBike from './CarMotorBike/ParentMotorBike'
import ElectronicParent from './Electronics/ElectronicParent'
import ParentBeauty from './BeautyBest/ParentBeauty'
import ParentShoes from './Shoes/ParentShoes'
import Footer from '../FooterComp/Footer'
import Button from "../ButtonComp/Button"
const Sellers = () => {
    return (
        <>
            <div className="container-fluid border main_best_seller_container">
                <div className="row ">
                    <div className="col-md-12">
                        <div className="col-md-6 heading_bestseller">
                            <h3>Amazon Bestsellers
                            </h3>
                            <p>Our most popular products based on sales. Updated frequently</p>
                        </div>
                        <div className="col-md-6 ">
                           
                        </div>
                    </div>
                    <div className="col-md-12 ">
                        <div className="row">
                            <div className="col-md-2 border inner_left_col">
                                <LeftList />
                            </div>

                            <div className="col-md-10 border ">
                                <ParentBestSeller />
                                <Parenttoys />
                                <ParentMotorBike />
                                <ElectronicParent />
                                <ParentBeauty />
                                <ParentShoes />


                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>

                <Button />
                <Footer />
            </div>


        </>
    )
}

export default Sellers
