import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore";

import { db } from "../Firebase";
export default function Addservice() {
  const nav = useNavigate();
  ///set State

  const [mainservice, setAddmain] = useState("સેવા પસંદ કરો");
  const [subserivce, setSub] = useState("");
  const [documents, setAdddocumnet] = useState("");

  const pushdata = async (e) => {
    e.preventDefault();

    try {
      const data = documents.replaceAll("\n", ";");

      /// Add Data Firestore
      const colref = collection(db, mainservice);
      const docRef = await setDoc(doc(colref, subserivce), {
        documents: data,
      });

      /// Notification

      const message = `In ${mainservice} Services New ${subserivce} Service Is Added SuccessFully`;
      const response = await fetch("/getAccessToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      window.alert("સંપૂર્ણ રીતે ઉમેરાયેલ સેવામાં સફળતા");
      nav("/Dash/Home");
    } catch (e) {
      console.error("દસ્તાવેજ ઉમેરવામાં ભૂલ: ");
    }
  };

  return (
    <>
      <span className="text-3xl flex justify-center font-semibold  py-1 px-2  rounded text-blue-400  uppercase last:mr-0 mr-1">
        સેવા ઉમેરો
      </span>
      <div className="max-w-screen-xl   mt-10 mb-10 px-8  gap-8 grid-cols-1 md:grid-cols-2 flex justify-center py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div>
              <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                નવી સેવા દાખલ કરો
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
                સબ સર્વિસ દાખલ કરો
              </span>
              <div>
                <input
                  type="text"
                  id="Sub Service"
                  placeholder="સબ સર્વિસ દાખલ કરો"
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
                  value={subserivce}
                  onChange={(e) => {
                    setSub(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                    દસ્તાવેજ દાખલ કરો
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
                    rows={3}
                    cols={50}
                    placeholder="દસ્તાવેજ દાખલ કરો"
                    value={documents}
                    onChange={(e) => {
                      setAdddocumnet(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={pushdata}
                class="relative  items-center  justify-center inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
              >
                <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                  સેવા ઉમેરો
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
