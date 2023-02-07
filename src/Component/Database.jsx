import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
export default function Database() {
  const [mainservice, setAddmain] = useState("સેવા પસંદ કરો");
  const fetchdata = async () => {
    try {
      const main = mainservice;
      const q = query(collection(db, main));
      const unsub = await onSnapshot(q, (querySnapshot) => {
        let div = [];
        querySnapshot.forEach((doc) => {
          div.push({ ...doc.data(), id: doc.id });
        });
        console.log(div);
        
      });
      return () => unsub();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <span className="text-3xl flex justify-center font-semibold  py-1 px-2  rounded text-violet-600  uppercase last:mr-0 mr-1">
        Database
      </span>
      <div className="max-w-screen-xl   mt-10 mb-10 px-8  gap-8 grid-cols-1 md:grid-cols-2 flex justify-center py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <div>
              <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                Select The Service
              </span>
              <select
                class="form-select form-select-lg mb-3
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
                  fetchdata();
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
                  5) RTI{" "}
                </option>
                <option value="Social Security" data-value="Social Security">
                  6) સામાજિક સુરક્ષા
                </option>
                <option value="Supply" data-value="Supply">
                  7) પુરવઠા
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
