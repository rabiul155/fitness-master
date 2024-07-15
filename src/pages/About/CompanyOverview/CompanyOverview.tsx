import banner from "@/assets/about-banner.jpg";

function CompanyOverview() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={banner}
            alt="Company Cover"
            className="w-full h-64 object-cover object-center"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              About Us
            </h1>
            <p className="text-gray-600 text-lg text-center leading-relaxed mb-4">
              Welcome to Fitness Accessories Co., your one-stop shop for all
              your fitness needs. Founded with the mission to provide
              high-quality and affordable fitness accessories, we strive to help
              you achieve your fitness goals and maintain a healthy lifestyle.
            </p>
            <p className="text-gray-600 text-lg text-center leading-relaxed mb-4">
              Our team is dedicated to sourcing the best products from around
              the world, ensuring that each item meets our strict standards for
              quality and functionality. Whether you're a beginner or a seasoned
              athlete, we have something for everyone.
            </p>
            <p className="text-gray-600 text-lg text-center leading-relaxed mb-4">
              We believe in the power of fitness to transform lives, and we are
              here to support you every step of the way. Thank you for choosing
              Fitness Accessories Co. as your trusted partner in your fitness
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyOverview;
