import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../Hooks/UseMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories=['salad','pizza','dessert','soup','drinks']
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = UseMenu()
    

    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Menu | Order Food</title>
            </Helmet>
            <Cover image={orderImg} title={'Our Shop'} subTitle={'Would to try to Our Dish'}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='flex text-center'>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel><OrderTab items={salad}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={pizza}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={desserts}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={soup}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={drinks}></OrderTab></TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;