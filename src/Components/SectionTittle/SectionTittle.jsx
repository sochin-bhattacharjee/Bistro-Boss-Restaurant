import React from 'react';

const SectionTittle = ({heading,subHeading}) => {
    return (
        <div>
            <h1 className="text-yellow-500">{subHeading}</h1>
            <hr className="w-2/4 mx-auto mb-2 mt-2" />
            <h1 className="text-3xl">{heading}</h1>
            <hr className="w-2/4 mx-auto mb-8 mt-2" />
        </div>
    );
};

export default SectionTittle;