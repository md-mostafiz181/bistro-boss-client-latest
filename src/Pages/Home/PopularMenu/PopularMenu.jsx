import { useEffect, useState } from "react";
import "./PopularMenu.css"
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const PopularMenu = () => {

    const [menu,setMenu]=useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularMenu= data.filter(item =>item.category === "popular")
            setMenu(popularMenu)
        })
    },[])


    return (
        
       <section className="py-[100px]">

        <SectionTitle
        subHeading="Check it out"
        heading="Our Menu"
        >

        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-2 mt-2">
            {
                menu.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>

       </section>
    );
};

export default PopularMenu;