import React, { useState, useRef } from "react";

function BookDemo() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Tarayıcının varsayılan davranışını engelle
    // Form işlemlerini gerçekleştir

    // Verileri sunucuya gönderme veya başka bir işlem yapma

    // Form submit olduğunda animasyonu kapat
    setShowForm(false);
  };

  const handleOutsideClick = (e) => {
    // Formın dışına tıklanıldığında animasyonu kapat
    if (!formRef.current.contains(e.target)) {
      setShowForm(false);
    }
  };

  return (
    <>
      <button
        className="flex w-[170px] h-[54px] items-center justify-center flex-shrink-0 rounded-[5.173px] bg-gradient-to-r from-[#4B179025] to-[#D17BDF] text-center"
        onClick={toggleForm}
      >
        <p className="flex text-[24.831px] text-white font-medium leading-normal">
          Book Demo
        </p>
      </button>

      {showForm && (
        <div
          className="fixed top-0 left-0 w-screen h-full flex items-center justify-center bg-white bg-opacity-75 "
          onClick={handleOutsideClick}
        >
          <div
            className="bg-white p-8 rounded shadow-lg w-[600px]"
            ref={formRef}
          >
            <h2 className="text-2xl font-bold mb-4">Book Demo</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-[300px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-[300px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="number"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  className=" w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="flex justify-end mb-16">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default BookDemo;
