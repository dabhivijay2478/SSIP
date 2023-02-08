import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";
export default function Addservice() {
  const nav = useNavigate();
  const [mainservice, setAddmain] = useState("સેવા પસંદ કરો");
  const [newserivce, setAddnew] = useState("");
  const [documents, setAdddocumnet] = useState(" ");
  const pushdata = async (e) => {
    e.preventDefault();

    try {
      const main = mainservice;
      const newse = newserivce;
      const colref = collection(db, main);
      const docRef = await setDoc(doc(colref, newse), {
        documents,
      });
      console.log("Sucess fully Added", docRef);
      nav("/Dash");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <span className="text-3xl flex justify-center font-semibold  py-1 px-2  rounded text-violet-600  uppercase last:mr-0 mr-1">
        Addservice
      </span>
      <div className="max-w-screen-xl   mt-10 mb-10 px-8  gap-8 grid-cols-1 md:grid-cols-2 flex justify-center py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div>
              <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                Enter The New Service
              </span>
              <select
                className="form-select form-select-lg mb-3
                        appearance-none
                        block
                        w-full
                        px-4
                        py-2
                        text-xl
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label=".form-select-lg example"
                defaultValue={mainservice}
                onChange={(e) => {
                  setAddmain(e.target.value);
                }}
              >
                <option selected>સેવા પસંદ કરો</option>
                <option value="Certificates" data-value="Certificates">
                  1) પ્રમાણપત્ર
                </option>
                <option value="Magisterial" data-value="Magisterial">
                  2) મેજિસ્ટ્રિયલ
                </option>
                <option value="Miscellaneous" data-value="Miscellaneous">
                  3) વિવિધ
                </option>
                <option value="Revenue" data-value="Revenue">
                  4) આવક
                </option>
                <option value="RTI" data-value="RTI">
                  5) RTI
                </option>
                <option value="Social Security" data-value="Social Security">
                  6) સામાજિક સુરક્ષા
                </option>
                <option value="Supply" data-value="Supply">
                  7) પુરવઠા
                </option>
              </select>
            </div>
            <div>
              <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                Enter The Sub Service
              </span>
              <div>
                <input
                  type="text"
                  id="Sub Service"
                  placeholder="Enter The Sub Service"
                  className="form-input mb-3
                  appearance-none
                  block
                  w-full
                  px-4
                  py-2
                  text-xl
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  value={newserivce}
                  onChange={(e) => {
                    setAddnew(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                    Enter The Document's
                  </span>
                  <textarea
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message"
                    value={documents}
                    onChange={(e) => {
                      setAdddocumnet(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={pushdata}
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Button Text
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
