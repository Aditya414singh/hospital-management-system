// import Carousel from "./Carousel";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Footer from "./Footer";
// import DoctorCard from "../UserComponent/DoctorCard";
// //import background from "../images/stethoscope-doctor-md-medical-health-hospital.jpg";

// const HomePage = () => {
//   const [allDoctor, setAllDoctor] = useState([]);

//   const retrieveAllDoctor = async () => {
//     const response = await axios.get("http://localhost:8080/api/doctor/all");
//     console.log(response.data);
//     return response.data;
//   };

//   useEffect(() => {
//     const getAllDoctor = async () => {
//       const allDoctor = await retrieveAllDoctor();
//       if (allDoctor) {
//         setAllDoctor(allDoctor);
//       }
//     };

//     getAllDoctor();
//   }, []);

//   return (
//     // <div style={{ backgroundImage: `url(${background})`, height: '150vh',
//     // backgroundPosition: 'center',
//     // backgroundRepeat: 'no-repeat',
//     // backgroundSize: 'cover',
//     //   }}>
//     <div className="container-fluid mb-2">
//       <Carousel />
//       <div className="mt-2 mb-5">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="row row-cols-1 row-cols-md-5 g-3">
//               {allDoctor.map((doctor) => {
//                 return <DoctorCard item={doctor} />;
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <Footer />
//     </div>
//     // </div>
//   );
// };

// export default HomePage;


import Carousel from "./Carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import DoctorCard from "../UserComponent/DoctorCard";

const HomePage = () => {
  const [allDoctor, setAllDoctor] = useState([]);

  const retrieveAllDoctor = async () => {
    const response = await axios.get("http://localhost:8080/api/doctor/all");
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getAllDoctor = async () => {
      const allDoctor = await retrieveAllDoctor();
      if (allDoctor) {
        setAllDoctor(allDoctor);
      }
    };

    getAllDoctor();
  }, []);

  return (
    <div className="container-fluid mb-2">
      <Carousel />

      {/* Hero Section */}
      <div className="text-center my-4">
        <h1 className="text-color">Welcome to Our Hospital</h1>
        <p className="lead">We care for your health — Book your appointment now!</p>
        <a href="/user/login">
          <button className="btn bg-color custom-bg-text px-4 py-2 mt-2">
            Login to Continue
          </button>
        </a>
      </div>

      {/* Why Choose Us */}
      <div className="container my-5">
        <h3 className="text-center text-color mb-4">Why Choose Us</h3>
        <div className="row text-center">
          <div className="col-md-3">
            <div className="card p-3 rounded-card h-100">
              <h5 className="text-color">Expert Doctors</h5>
              <p>Highly qualified professionals across every specialization.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 rounded-card h-100">
              <h5 className="text-color">Easy Appointments</h5>
              <p>Schedule with ease through our digital interface.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 rounded-card h-100">
              <h5 className="text-color">24x7 Support</h5>
              <p>Emergency and support services available round the clock.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 rounded-card h-100">
              <h5 className="text-color">Patient Privacy</h5>
              <p>Your data is secure and confidential with us.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Doctors Section Heading */}
<div className="container text-center my-4">
  <h3 className="text-color">Our Doctors</h3>
  <p>Meet our expert medical team ready to serve you with care and dedication.</p>
</div>

      {/* Existing Doctor Cards */}
      <div className="mt-2 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-cols-1 row-cols-md-5 g-3">
              {allDoctor.map((doctor) => {
                return <DoctorCard key={doctor.id} item={doctor} />;
              })}
            </div>
          </div>
        </div>
      </div>

     {/* Testimonials Section */}
<div className="container my-5">
  <h3 className="text-center text-color mb-4">What Our Patients Say</h3>
  <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
      <div className="card p-3 h-100 shadow-sm">
        <p>"The doctors are very friendly and the system is so smooth."</p>
        <b>– Riya Sharma</b>
      </div>
    </div>
    <div className="col">
      <div className="card p-3 h-100 shadow-sm">
        <p>"Booking appointments online saved me so much time."</p>
        <b>– Aman Verma</b>
      </div>
    </div>
  </div>
</div>

      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
