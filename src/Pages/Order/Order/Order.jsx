import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from "../../../components/Container/Container";
import useMenu from "../../../hooks/useMenu";
// import FoodCard from "./FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";



const Order = () => {

    const categories=["salad","pizza", "soup", "dessert", "drinks" ]
    const {category}=useParams();
    const initialIndex=categories.indexOf(category)
    const [tabIndex, setTabIndex]=useState(initialIndex)
    const [menu]=useMenu();
   
    // console.log(category)

    // const offered=menu.filter(item=>item.category === "offered")
    const dessert=menu.filter(item=>item.category === "dessert")
    const salad=menu.filter(item=>item.category === "salad")
    const pizza=menu.filter(item=>item.category === "pizza")
    const soup=menu.filter(item=>item.category === "soup")
    const drinks=menu.filter(item=>item.category === "drinks")
    return (
        
        <div>

            <Helmet>
                <title>Bistro || Order</title>
            </Helmet>
            <Cover
            img={orderImg}
            title="Our shop"
            text="Would you like to try a dish?"
            ></Cover>

              <Container>
              <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>

                    </TabList>

                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
              </Container>


        </div>
    );
};

export default Order;