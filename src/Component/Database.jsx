import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { async } from "@firebase/util";
export default function Database() {
  const [data, setData] = useState([]);
  const [mainservice, setAddmain] = useState("સેવા પસંદ કરો");
  const [newserivce, setAddnew] = useState("");
  const [documents, setAdddocumnet] = useState("");
  // const fetchdata = async () => {
  //   try {
  //     const main = mainservice;
  //     const q = query(collection(db, main));
  //     const unsub = await onSnapshot(q, (querySnapshot) => {
  //       let div = [];
  //       querySnapshot.forEach((doc) => {
  //         div.push({ ...doc.data(), id: doc.id });
  //       });
  //       console.log(div);
  //     });
  //     return () => unsub();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const main = mainservice;
  useEffect(() => {
    const q = query(collection(db, main));
    onSnapshot(q, (querySnapshot) => {
      const table = [];
      querySnapshot.forEach((doc) => {
        table.push({ ...doc.data(), id: doc.id });
      });
      setData(table);
    });
  }, []);

  const updateData = async (e) => {
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
    setUpdatedCustomerPassword("");
    setUpdatedCustomerName("");
    setDataIdToBeUpdated("");
  };

  return (
    <>
      <div>
        <span className="text-3xl flex justify-center font-semibold  py-1 px-2  rounded text-violet-600  uppercase last:mr-0 mr-1">
          Database
        </span>
        <div className="max-w-screen-xl   mt-10 mb-10 px-8  gap-8 grid-cols-1 md:grid-cols-2 flex justify-center py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <div>
                <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                  Select The Service
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
            class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModalCenteredScrollable"
            tabindex="-1"
            aria-labelledby="exampleModalCenteredScrollable"
            aria-modal="true"
            role="dialog"
          >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
              <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <span className="text-3xl flex justify-center font-semibold  py-1 px-2  rounded text-violet-600  uppercase last:mr-0 mr-1">
                    Addservice
                  </span>
                  <button
                    type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body relative p-4">
                  <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                      <div>
                        <span className="text-lg flex justify-start font-thin   py-1 px-2  rounded text-gray-900 uppercase last:mr-0 mr-1">
                          Enter The New Service
                        </span>
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
                    </div>
                  </div>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Data
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr class="border-b" key={item.id}>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.id}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div class="flex justify-center">
                              <div class="mb-3 xl:w-96">
                                <textarea
                                  class="
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
                                  rows="3"
                                >
                                  {item.documents}
                                </textarea>
                              </div>
                            </div>
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button
                              type="button"
                              class="inline-block  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenteredScrollable"
                              onClick={() => {
                                newserivce(id);
                              }}
                            >
                              Update
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