
import "./PopularMenu.css"
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu]=useMenu();
    const popularMenu=menu.filter(item=>item.category === "popular")


    return (
        
       <section className="py-[100px]">

        <SectionTitle
        subHeading="Check it out"
        heading="Our Menu"
        >

        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-2 mt-2">
            {
                popularMenu.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>

       </section>
    );
};

export default PopularMenu;