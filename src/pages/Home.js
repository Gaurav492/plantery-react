import useTitle from "../lib/changeTitle";

function Home() {
  useTitle("");
  return (
    <>
      {/* ======= Hero Section =======  */}
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container text-center position-relative"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h1>Your One Stop For All Garden Needs</h1>
          <h2>We will help you Grow your Dream Plants</h2>
          <a href="#about" className="btn-get-started scrollto">
            Get your Buddy plant
          </a>
        </div>
      </section>
      {/* End Hero  */}

      <main id="main">
        {/* ======= Products Section =======  */}
        <section id="product" className="product">
          <div className="container">
            <div className="section-title" data-aos="fade-left">
              <h2>Products</h2>
              <p>Grown With Love, Delivered With Hope!</p>
            </div>

            <div className="row" data-aos="fade-right">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="pr-icon-box">
                  <div className="icon">
                    <i className="fab fa-pagelines"></i>
                  </div>
                  <h4>
                    <a href="">Seeds</a>
                  </h4>
                  <p>
                    There are numerous benefits of growing plants from seeds. If
                    you start your garden by planting seeds, then you have an
                    extensive range of vegetables, herbs, and flowers to choose
                    from.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="pr-icon-box">
                  <div className="icon">
                    <i className="fa fa-leaf"></i>
                  </div>
                  <h4>
                    <a href="">Plants</a>
                  </h4>
                  <p>
                    We often don't think of buying plants online. But what if we
                    tell you that you can now order the most beautiful plants
                    right from home?{" "}
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="pr-icon-box">
                  <div className="icon">
                    <i className="fab fa-bitbucket"></i>
                  </div>
                  <h4>
                    <a href="">Pots</a>
                  </h4>
                  <p>
                    Pots or containers in any form are the hot favorites of the
                    gardeners worldwide. They save a lot of space and look
                    extremely beautiful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Product Section */}

        {/* ======= Accessories Section ======= */}
        <section id="accessories" className="accessories section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-title" data-aos="fade-right">
                  <h2>Accessories</h2>
                  <p className="sub">
                    Gardening is incomplete without maintaining plants. For
                    maintaining plants, one needs excellent quality tools and
                    accessories.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div
                      className="icon-box"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <div className="icon">
                        <i className="fas fa-cut"></i>
                      </div>
                      <h4>
                        <a href="">Pruning & Cutting</a>
                      </h4>
                      <p>
                        Every plant/tree needs to be pruned for a
                        well-maintained look. Pruning is an art and can be done
                        effectively only with an efficient set of tools.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div
                      className="icon-box"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="icon">
                        <i className="fas fa-hand-rock"></i>
                      </div>
                      <h4>
                        <a href="">Hand Tools</a>
                      </h4>
                      <p>
                        Hand Tools are essential if you have a small garden or
                        pot plants at home.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex align-items-stretch mt-4">
                    <div
                      className="icon-box"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <div className="icon">
                        <i className="fab fa-accusoft"></i>
                      </div>
                      <h4>
                        <a href="">Digging & Raking</a>
                      </h4>
                      <p>
                        Digging and Raking helps in keeping the garden soil
                        aerated, free from the nuisance of weeds and is
                        considered optimum for the growth of flowers, fruits,
                        and vegetables.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex align-items-stretch mt-4">
                    <div
                      className="icon-box"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <div className="icon">
                        <i className="fas fa-shower"></i>
                      </div>
                      <h4>
                        <a href="">Watering Tools</a>
                      </h4>
                      <p>
                        A perfect gardener is the one who utilizes all his
                        resources efficiently. Today, with the scarcity of water
                        it is highly important that our gardens are watered
                        efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section  */}
      </main>
    </>
  );
}

export default Home;
