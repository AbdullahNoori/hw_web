function Form() {
  return (
    <>
      <h1 className="text-xl text-center my-5" >SignUp Form</h1>
      <div className="font-mono text-center forced-colors: bg-green-950 grid justify-left m-5 py-5 rounded-3xl shadow-2xl">
        <input
          type="text"
          placeholder=" First Name"
          className="border-gray-300 rounded-md m-2 focus:border-blue-600 max-w-72 ml-6"
        />
        <input
          type="text"
          placeholder=" Last Name"
          className="border-gray-300v rounded-md m-2 focus:border-blue-950 max-w-72 ml-6"
        />
        <input
          type="text"
          placeholder=" Date Of Birth"
          className="border-gray-300 rounded-md m-2 focus:border-blue-950 max-w-72 ml-6"
        />
        <input
          type="text"
          placeholder=" Password"
          className="border-gray-300 rounded-md m-2 focus:border-red-800 max-w-72 ml-6"
        />
        <button className="bg-red-300 m-3 p-2 rounded-xl hover:bg-red-600 transition-all duration-500 ease-in-out max-w-52 ml-16">
          Create Account
        </button>
      </div>
    </>
  );
}
export default Form;
