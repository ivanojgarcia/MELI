import React from 'react';

const Breadcrumb = ({category, searchWord, detail=null}) => {
    // const detailValue = () => (detail) ? <li><span className="mx-2"> > </span></li><li>Data</li> : null;
    return (
        <>
       { (category) ? <nav className="rounded font-sans w-full text-gray-400 my-4">
            <ol className="list-reset flex">
                <li><a href="#" className="hover:text-gray-400">{category} </a></li>
                <li><span className="mx-2"> > </span></li>
                <li><a href="#" className="hover:text-gray-400 ">{searchWord} </a></li>
            </ol>
        </nav> : <div className="p-3"></div> }
        </>
    );
};

export default Breadcrumb;