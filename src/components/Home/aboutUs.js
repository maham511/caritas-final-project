import React from 'react'

const AboutUs = () => (
  <div className="m-2 bg-red-600 p-4">
    <div className="bg-red">
      <h1 className="text-center text-3xl md:text-5xl mt-6 text-white">
        Caritas Refugee Education
      </h1>
      <figure className="p-4 bg-white m-6 font-bold rounded">
        <blockquote className="italic">
            ”I went from being destitute and living in emergency accommodation,
            to getting a qualification with Caritas and now succeeding in my
            university course.”
        </blockquote>
        <figcaption> — Musaab, former student</figcaption>
      </figure>
      <p className="p-4 text-white">
        Caritas Refugee Education works alongside refugees and asylum seekers in
        order to assist in their journey of wellbeing and integration. We do
        this by providing high quality language lessons, delivered in a
        welcoming community environment, mentoring into further education and
        employment, and wrap-around well-being services.
      </p>
    </div>
  </div>
)

export default AboutUs
