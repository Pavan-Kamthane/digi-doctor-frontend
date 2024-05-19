import React from "react";
import "../styles/home.css";
import img from "../assets/health-check.png";
import easy from '../assets/easy.png'
import secure from '../assets/secure.png'
import free from '../assets/free.png'

const Home = () => {
  return (
    <>
    <div className="hero">
      <div className="content">
        <img src={img} alt="" />

        <h1>
          Welcome to <span>Digi-Doctor</span>
        </h1>
        <p>Your one-stop solution for all your health-related queries.</p>
        <p>
          We provide a variety of tools to help you keep track of your health.
        </p>
        <p>Get started by creating an account or logging in.</p>
        <a href="/login" className="btn">
          Get Started
        </a>
      </div>
    </div>

    <div className="whychooseus">
      <h2>Why Choose Us?</h2>
      <div className="content">
        <div className="box">
          <img src={easy} alt="easy" />
          <h3>Easy to Use</h3>
          <p>
            Our platform is easy to use and provides a seamless experience for
            all users.
          </p>
        </div>
        <div className="box">
          <img src={secure} alt="secure" />
          <h3>Secure</h3>
          <p>
            We take security seriously and ensure that your data is safe with
            us.
          </p>
        </div>
        <div className="box">
          <img src={free} alt="free" />
          <h3>Free to Use</h3>
          <p>
            Our platform is free to use and does not require any subscription
            fees.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
