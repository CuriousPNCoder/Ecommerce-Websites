import React from 'react'

const OrderForm = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 px-10">
        <div className="col-span-8 sm:col-span-6 lg:col-span-8 px-6">
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  1. Delivery address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  North 24 Parganas, West Bengal
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  2. Payment method
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Cash on Delivery
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  3. Review item and delivery
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <div
                    class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-200 dark:text-red-400"
                    role="alert">
                    <svg
                      className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Danger</span>
                    <div>
                      <span className="font-medium">
                        Requrired at time of delivery
                      </span>
                      <ul className="mt-1.5 list-disc list-inside">
                        <li>Signature requrired at time of delivery</li>
                        <li>Carefully check the product</li>
                        <li>Right now, cash on in delivery just available</li>
                      </ul>
                    </div>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-6 lg:col-span-4">
          <div>
            <p>
              By placing order you agree to this website of Use & Sale. Please
              see our privacy Note, our cokkies notice and our interest-based
              ads notice
            </p>
            <div className="px-6 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Price (1 item)
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                57,000
              </dd>
            </div>
            <div className="px-6 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Discount
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                -10,901
              </dd>
            </div>
            <div className="px-6 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Delivery Charges
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                FREE Delivery
              </dd>
            </div>
            <div className="px-6 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Packaging Fee
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                99
              </dd>
            </div>
            <div className="px-6 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Total Amount
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                99
              </dd>
            </div>
            <div className="justify-center flex items-center py-4">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-36 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderForm