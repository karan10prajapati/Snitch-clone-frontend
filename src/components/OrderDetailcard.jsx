import React from 'react'

function OrderDetailcard() {
  return (
   <> 
       <div
              className={`flex justify-between p-4 border-b ${
                !show && "hidden"
              }`}
            >
              <div>
                <div>
                  {" "}
                  <span className="text-slate-500 text-sm">
                    Order Placed On :
                  </span>{" "}
                  <span className="from-neutral-200"> April 02 2024</span>{" "}
                </div>
                <div>
                  {" "}
                  <span className="text-slate-500 text-sm">
                    Order ID:{" "}
                  </span>{" "}
                  <span className="from-neutral-200"> 2503843</span>{" "}
                </div>
              </div>

              <div
                className="from-neutral-200"
                onClick={() => {
                  setshow(!show);
                }}
              >
                ORDER DETAIL
              </div>
            </div>

            <div>
              {show ? (
                <div className="flex gap-4 pt-5 pl-5 ">
                  <img src={card.img} className="w-16 pb-8" />
                  <div className="text-lg">{card.name}</div>
                </div>
              ) : (
                <div className="mt-4  w-full  max-md:mx-auto rounded-lg">
                  <div className=" mx-auto">
                    <div className="flex justify-between  border-b pb-2 pt-1">
                      <div className="text-xl max-md:font-semibold font-medium">
                        ORDER DETAILS
                      </div>
                      <div
                        className="max-md:hidden"
                        onClick={() => {
                          setshow(!show);
                        }}
                      >
                        BACK TO ORDER HISTORY
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 pt-4 pb-4  border-b">
                      <div className="max-md:text-sm">
                        <span className="max-md:hidden">Order Placed On :</span>{" "}
                        April 02 2024
                      </div>
                      <div>Order ID: 2503565</div>
                    </div>

                    <div className="pt-4 pb-4 flex flex-col gap-5">
                      <div className="font-medium text-xl max-md:hidden">
                        ITEM DETAIL
                      </div>

                      <div className="flex max-md:flex-col gap-4 max-md:items-center">
                        <div>
                          <img src={card.img} className="w-24" />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className=" md:text-xl">{card.name}</div>
                          <div>{card.price}</div>
                          <div>SNITCH</div>
                        </div>
                      </div>
                    </div>

                    <div className="md:pt-4 pb-4 hidden">
                      <button className="p-2 hover:text-white hover:bg-black border">
                        Return & Exchange
                      </button>
                    </div>

                    <div className="w-full h-0.5 border mt-5"></div>

                    <div className="pt-4 pb-4">
                      <div className="font-medium text-xl">SUMMARY</div>

                      <div className="pt-4 pb-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                          <div>SUBTOTAL:</div>
                          <div>Rs.1009</div>
                        </div>

                        <div className="flex justify-between">
                          <div>Shipping Cost</div>
                          <div>Rs.100</div>
                        </div>
                      </div>

                      <div className="w-full h-0.5 border "></div>

                      <div className="md:mt-2 flex justify-between max-md:bg-gray-600">
                        <div className="text-sm font-extrabold">
                          Grand Total :
                        </div>
                        <div>RS. 1109</div>
                      </div>

                      <div className="md:mt-3 border-b-2 border-t-2 p-1">
                        <b>Shipping Address : </b>karan prajapati Arya Nagar
                        Chowk, Shastri Nagar, Nandpuri 249407 Haridwar UK India
                      </div>

                      <div className="  p-1">
                        <b>Billing Address : </b>karan prajapati Arya Nagar
                        Chowk, Shastri Nagar, Nandpuri 249407 Haridwar UK India
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
   </>
  )
}

export default OrderDetailcard