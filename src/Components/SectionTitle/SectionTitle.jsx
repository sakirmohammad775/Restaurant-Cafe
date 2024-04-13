

const SectionTitle = ({subHeading,heading}) => {
    return (
        <>
        <div className="mx-auto text-center w-4/12 my-4">
            <p className="text-yellow-600 py-2 ">---{subHeading}---</p>
            <p className="uppercase border-y-2 py-3 text-3xl">{heading}</p>
        </div>
        </>
    );
};

export default SectionTitle;