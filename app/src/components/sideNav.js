import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

const SideNav = (props) => {
  const [numFields, setNumFields] = useState(props.fieldGroups.length);
  return (
  <div>
    <div className="flex flex-col justify-center text-center  sticky">
      
        <button className="flex-row bg-green-600 h-16 font-bold text-xl rounded-t-lg text-white items-center outline-none cursor-default">
            { props.formType }
        </button>

        {props.page === 0 && numFields > 0  && (
          <button 
              className="flex-row h-12 items-center border-b-2 border-l-2 border-r-2 border-green-600 text-green-600 font-bold outline-none">
              {props.fieldGroups[0]}
          </button>
        )}
        {props.page !== 0 && numFields > 0  && (
          <button className="flex-row h-12 items-center border-b-2 border-l-2 border-r-2 hover:bg-gray-100 outline-none"
                  onClick= {() => {
                    props.setPage(0)
                  }}
          >
              {props.fieldGroups[0]}
          </button>
        )}

        {props.page === 1 && numFields > 1 &&  (

          <button className="flex-row h-12 items-center border-b-2 border-l-2 border-r-2 border-green-600 text-green-600 font-bold outline-none">
              {props.fieldGroups[1]}
          </button>
        )}
        {props.page !== 1 && numFields > 1 && (
          <button className="flex-row h-12 items-center border-b-2 border-l-2 border-r-2 hover:bg-gray-100 outline-none"
                  onClick= {() => {
                    props.setPage(1)
                  }}
          >
              {props.fieldGroups[1]}
          </button>
        )}

        {props.page === 2 && numFields > 2 && (

          <button className="flex-row h-12 items-center border-b-2 border-l-2 border-r-2 border-green-600 text-green-600 font-bold outline-none">
              {props.fieldGroups[2]}
          </button>
        )}
        {props.page !== 2 && numFields > 2 && (
          <button 
            className="flex-row h-12 items-center border-b-2 border-l-2 border-r-2 hover:bg-gray-100 outline-none"
            onClick= {() => {
              props.setPage(2)
            }}
          >
              {props.fieldGroups[2]}
          </button>
        )}

        {props.page === 3 && numFields > 3 && (
          <button className="flex-row h-12 items-center border-b-2 border-l-2 border-green-600 border-r-2 rounded-b-lg text-green-600 font-bold outline-none">
              {props.fieldGroups[3]}
          </button>
        )}
        {props.page !== 3 && numFields > 3 && (
          <button className="flex-row h-12 items-center border-b-2 border-l-2 border-r-2 hover:bg-gray-100 rounded-b-lg outline-none"
                  onClick= {() => {
                    props.setPage(3)
                  }}
          >
              {props.fieldGroups[3]}
          </button>
        )}


      {props.page === 4 && numFields > 4 && (
          <button className="flex-row h-12 items-center border-b-2 border-l-2 border-green-600 border-r-2 rounded-b-lg text-green-600 font-bold outline-none">
              {props.fieldGroups[4]}
          </button>
        )}
        {props.page !== 4 && numFields > 4 && (
          <button className="flex-row h-12 items-center border-b-2 border-l-2 border-r-2 hover:bg-gray-100 rounded-b-lg outline-none"
                  onClick= {() => {
                    props.setPage(4)
                  }}
          >
              {props.fieldGroups[4]}
          </button>
        )}


      {props.page === 5 && numFields > 5 && (
          <button className="flex-row h-12 items-center border-b-2 border-l-2 border-green-600 border-r-2 rounded-b-lg text-green-600 font-bold outline-none">
              {props.fieldGroups[5]}
          </button>
        )}
        {props.page !== 5 && numFields > 5 && (
          <button className="flex-row h-12 items-center border-b-2 border-l-2 border-r-2 hover:bg-gray-100 rounded-b-lg outline-none"
                  onClick= {() => {
                    props.setPage(5)
                  }}
          >
              {props.fieldGroups[5]}
          </button>
        )}
    </div>

  </div>
 
  )
};

export default SideNav;
