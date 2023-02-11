import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";

export default function Database() {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [mainservice, setAddmain] = useState("સેવા પસંદ કરો");
  const [subserivce, setAddnew] = useState("");
  const [documents, setAdddocumnet] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
  const [iddelete, setDeleteid] = useState("");

  const modifeddata = documents.replaceAll("->", "");

  const newdata = modifeddata.replaceAll("\n", ";");
  useEffect(() => {
    const q = query(collection(db, mainservice));
    const data = onSnapshot(q, (querySnapshot) => {
      const table = [];
      querySnapshot.forEach((doc) => {
        table.push({ ...doc.data(), id: doc.id });
      });
      setData(table);
    });
    return data;
  }, [data]);
  const updateData = async (e) => {
    e.preventDefault();

    try {
      //update

      // const data = documents.replaceAll("\n", ";");
      const colref = collection(db, mainservice);
      const docRef = await setDoc(doc(colref, dataIdToBeUpdated), {
        documents: newdata,
      });

      ///Notification

      const message = `In ${mainservice} Services few update is Changes SuccessFully, You Can See ${Sub} Service`;
      const response = await fetch("/getAccessToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      window.alert("Update SuccessFully !!");
      nav("/Dash/Home");

      setAdddocumnet("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const removeFromFirestore = async (e) => {
    // e.preventDefault();
    try {
      const docRef = doc(db, mainservice, iddelete);

      const deletedoc = await deleteDoc(docRef);
      window.alert("Entire Document has been deleted successfully", iddelete);
      nav("/Dash/Home");
      console.log("Entire Document has been deleted successfully", deleteDoc);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>
        <span className="text-3xl flex justify-center font-semibold  py-1 px-2  rounded text-blue-400 uppercase last:mr-0 mr-1">
          ડેટાબેઝ
        </span>
        <div className="max-w-screen-xl   mt-10 mb-10 px-8  gap-8 grid-cols-1 md:grid-cols-2 flex justify-center py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <div>
                <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                  સેવા પસંદ કરો
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
        <div>
          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModalCenteredScrollable"
            tabIndex="-1"
            aria-labelledby="exampleModalCenteredScrollable"
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-full pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <span className="text-3xl flex justify-center font-semibold  py-1 px-2  rounded text-violet-600  uppercase last:mr-0 mr-1">
                    Update
                  </span>
                  <button
                    type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body relative p-4">
                  <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                      <div>
                        <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                          મુખ્ય સેવા
                        </span>
                        <input
                          type="text"
                          id="mainservice"
                          placeholder="
                          મુખ્ય સેવા"
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
                          value={mainservice}
                          onChange={(e) => {
                            setAddnew(e.target.value);
                          }}
                          readOnly
                        />
                      </div>
                      <div>
                        <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                          પેટા સેવા
                        </span>
                        <div>
                          <input
                            type="text"
                            id="SubService"
                            placeholder="પેટા સેવા"
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
                            value={dataIdToBeUpdated}
                            onChange={(e) => {
                              setAddnew(e.target.value);
                            }}
                            readOnly
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-center">
                          <div className="mb-3 xl:w-96">
                            <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                              દસ્તાવેજ અપડેટ કરો
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
                              value={
                                "->" + modifeddata.replaceAll("\n", "\n->")
                              }
                              onChange={(e) => {
                                setAdddocumnet(e.target.value);
                              }}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    id="closemodel"
                    name="closemodel"
                    className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={updateData}
                    data-bs-dismiss="modal"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="  rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          પેટા સેવા
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          દસ્તાવેજ
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          સંપાદિત કરો
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {data.map((item) => (
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            <textarea rows={4} cols={20} readOnly>
                              {"->" + item.id.replaceAll(";", "\n->")}
                            </textarea>
                          </td>

                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            <textarea rows={10} cols={80} readOnly>
                              {"->" + item.documents.replaceAll(";", "\n->")}
                            </textarea>
                          </td>

                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button
                              type="button"
                              onClick={(e) => {
                                setDataIdToBeUpdated(item.id);
                                setAdddocumnet(
                                  "->" + item.documents.replaceAll(";", "\n->")
                                );
                              }}
                              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenteredScrollable"
                            >
                              અપડેટ
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                setDeleteid(item.id), removeFromFirestore();
                              }}
                              className="inline-block px-6 ml-2 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              કાઢી નાખો
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
