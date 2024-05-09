
const SectionTitle = ({subHeading, heading}) => {
    return (
        
        <div className="mx-auto md:w-3/12 text-center">
            <p className="text-1xl text-orange-600 primaryFont mb-2">--- {subHeading} ---</p>
            <h3 className="text-2xl uppercase primaryFont border-y-4 py-2 mb-5">{heading}</h3>
        </div>
    );
};

export default SectionTitle;