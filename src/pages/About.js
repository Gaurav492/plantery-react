import React from "react";
import useTitle from "../lib/changeTitle";

function About() {
  useTitle("About Us | ");
  return (
    <>
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>About Us</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>About Us</li>
              </ol>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}
        <div className="site-section">
          <div className="container">
            {/* ======= Contact Section =======  */}
            <section id="contact" class="contact">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4" data-aos="fade-right">
                    <div class="section-title">
                      <h2>About Us</h2>
                    </div>
                  </div>

                  <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                    <h3>About Us</h3>
                    <p>Delivering Greenery At Your Door Step...</p>
                    <h3>Mission</h3>
                    <p>
                      Plantery is dedicated to improving the environment and the
                      quality of lives of our customers by providing exceptional
                      plants with benefits attached to each of them and to
                      establish lifetime relationships.
                    </p>
                    <h3>Company Overview</h3>
                    <p>
                      We simply love plants and all the benefits they bring to
                      us, our workplace, home and environment. Plantery brings
                      you the nursery online. No scorching heat, No insects all
                      around, No mushy land, No muddy hands. All you find with
                      us are fresh plants with benefits attached to it. Match
                      your requirements to find a plant of your choice at
                      Plantery.
                    </p>
                    <h3>Description</h3>
                    <p>
                      Our life is completely revolved around plants. It keeps
                      the environment wet which makes respiration easy, makes
                      the air fresh, and has the maximum medicinal values giving
                      good health & further sharpening your focus. Our products
                      are aimed at improving everyone’s workplace and living
                      environments. We are ready to work alongside businesses
                      large and small across the spectrum of industries,
                      including the educational and healthcare sectors, hotels,
                      offices, restaurants, bars and retail outlets. We also
                      provide planting schemes for the home. We can work
                      directly with our end-users or via architects, interior
                      designers or facility management companies.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
