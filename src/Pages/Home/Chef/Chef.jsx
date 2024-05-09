import { useEffect, useState } from "react";
import "./Chef.css";
import SingleChef from "./SingleChef/SingleChef";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Chef = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setChef(data);
      });
  }, []);
  return (
    <section className="mt-10 px-[5px]">

        <SectionTitle
        subHeading="Should Try"
        heading="Chef recommends"
        ></SectionTitle>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5">
        {chef.map((s) => (
          <SingleChef key={s._id} s={s}></SingleChef>
        ))}
      </div>
    </section>
  );
};

export default Chef;
