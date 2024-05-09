import { useEffect, useState } from "react";
import "./Chef.css";
import SingleChef from "./SingleChef/SingleChef";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Chef = () => {
  const [chef, setChef] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setChef(data);
      });
  }, []);

  const visibleChefs = showAll ? chef : chef.slice(0, 6);

  return (
    <section className="mt-10 px-[5px]">

        <SectionTitle
        subHeading="Should Try"
        heading="Chef recommends"
        ></SectionTitle>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5">
        {visibleChefs.map((s) => (
          <SingleChef key={s._id} s={s}></SingleChef>
        ))}
      </div>

      {chef.length > 6 ? (
        <div className="flex justify-center items-center h-full mt-3">
            <button className="cart-btn-view fontPrimary font-bold  uppercase text-orange-400" onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less Chefs" : "View Full Chefs"}
        </button>
        </div>
      ) : null}
    </section>
  );
};

export default Chef;
