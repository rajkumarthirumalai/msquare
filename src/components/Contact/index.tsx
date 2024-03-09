'use client'
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import NewsLatterBox from "./NewsLatterBox";
import { BallTriangle } from 'react-loader-spinner/';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading,setIsLoading] =useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    // Make an API request to your backend to store the form data
    const res = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      // Handle success
      console.log('Form submitted successfully');
      // Reset form data if needed
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setIsLoading(false)
    } else {
      // Handle error
      console.error('Error submitting form');
      setIsLoading(false)

    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <SectionTitle
        title=""
        paragraph=""
        center
      />
      <div
        className={`w-full  mx-auto text-center `}
        style={{ maxWidth: 770, marginBottom: 100 }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          Contact Us
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          Ready to elevate your data management and security? Get in touch with MSquare. Our experts are here to answer your inquiries, discuss your specific needs, and chart a course towards more efficient, secure, and streamlined data processes. You + us = awesome.
        </p>
      </div>
      <div className="container">
        <div className="-mx-4 flex ">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12 mx-auto">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                 {isLoading ?
                  <BallTriangle
                    height={60}
                    width={60}
                    radius={5}
                    color="rgb(17 120 113)"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    
                    /> :
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Submit Ticket
                    </button>}
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-4/12 xl:w-3/12"> */}
            {/* <NewsLatterBox /> */}

            {/* <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62883.09595735833!2d78.12282365!3d9.91783685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709384858769!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade" frameBorder="0" allowFullScreen></iframe> */}


          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
