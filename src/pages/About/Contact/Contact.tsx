function Contact() {
  return (
    <div className="w-full mx-auto p-6 bg-slate-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <div className="mb-6">
        <p className="mb-2 text-center">
          <strong>Company Name:</strong> Fitness Master Co.
        </p>
        <p className="mb-2 text-center">
          <strong>Address:</strong> 123 Fitness St., Health City, Dhaka, 1207
        </p>
        <p className="mb-2 text-center">
          <strong>Phone:</strong> +8801759595959
        </p>
        <p className="mb-2 text-center">
          <strong>Email:</strong> contact@fitnessmasterco.com
        </p>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-4">
          <a className="text-blue-600 hover:text-blue-800">Facebook</a>
          <a className="text-pink-500 hover:text-pink-700">Instagram</a>
          <a className="text-blue-400 hover:text-blue-600">Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
