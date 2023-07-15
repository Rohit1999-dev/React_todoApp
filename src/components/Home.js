import React from 'react'

function Home() {
  return (
    <>
    <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="!#">News Update</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" to={"/Home"} href='/Home'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to={"/CreateTodo"} href='/CreateTodo'>Todo Form</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to={"/Header"} href='/todoList'>Todo List</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className="container">
              <div className="row">
                  <div className="col-sm"><div class="card">
                  <a href="!#"><img src="https://c.ndtvimg.com/2023-07/np9elqao_england-afp_625x300_08_July_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" class="card-img-top" href="!#" alt="..." height="200px"/></a>
                      <div class="card-body">
                          <h5 class="card-title">Cricket</h5>
                          <p class="card-text">England team after the two lost important match, they backed strong in next match for the prospective of win the match.</p>
                          <a href="!#" class="btn btn-primary">Read More</a>
                      </div>
                  </div></div>
                  <div className="col-sm"><div class="card">
                  <a href="!#"><img src="https://images.indianexpress.com/2023/07/Assistant-Professor.jpg?w=640" class="card-img-top" alt="..." height="200px"/></a>
                      <div class="card-body">
                          <h5 class="card-title">Education</h5>
                          <p class="card-text">UGC reversing its order and saying that a PhD is not mandatory is not going to help in rankings of universities, some experts say.</p>
                          <a href="!#" class="btn btn-primary">Read More</a>
                      </div>
                  </div></div>
                  <div className="col-sm"><div class="card">
                  <a href="!#"><img src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" class="card-img-top" alt="..." height="200px"/></a>
                      <div class="card-body">
                          <h5 class="card-title">Mac Book</h5>
                          <p class="card-text">Now days Mac book performance & far better as compare past, battery perfommance is outstanding.</p>
                          <a href="!#" class="btn btn-primary">Read More</a>
                      </div>
                  </div></div>
                  <div className="col-sm"><div class="card">
                  <a href="!#"><img src="https://img.freepik.com/free-photo/gourmet-bowl-with-healthy-rice-meat-vegetables-generated-by-ai_188544-14076.jpg?size=626&ext=jpg&ga=GA1.1.707672962.1688838936&semt=ais" class="card-img-top" alt="..." height="200px"/></a>
                      <div class="card-body">
                          <h5 class="card-title">Foodie</h5>
                          <p class="card-text">In our india, day by day people are interested to eat new and explore the indian food by the blogs.</p>
                          <a href="!#" class="btn btn-primary">Read More</a>
                      </div>
                  </div></div>
              </div>
          </div>
          <footer className="bg-dark text-center text-white">
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                  <div className="me-5 d-none d-lg-block">
                      {/* <span>Get connected with us on social networks:</span> */}
                  </div>
                  <div>
                      <a href="!#" className="me-4 text-reset">
                          <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="!#" className="me-4 text-reset">
                          <i className="fab fa-twitter"></i>
                      </a>
                      <a href="!#" className="me-4 text-reset">
                          <i className="fab fa-google"></i>
                      </a>
                      <a href="!#" className="me-4 text-reset">
                          <i className="fab fa-instagram"></i>
                      </a>
                      <a href="!#" className="me-4 text-reset">
                          <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="!#" className="me-4 text-reset">
                          <i className="fab fa-github"></i>
                      </a>
                  </div>
              </section>
              <section className="">
                  <div className="container text-center text-md-start mt-5">
                      <div className="row mt-3">
                          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                              <h6 className="text-uppercase fw-bold mb-4">
                                  <i className="fas fa-gem me-3"></i>About Us
                              </h6>
                              <p>
                                  Here you can use learn the language for coding for develop the various type of website 
                                  with the help of various technology.
                              </p>
                          </div>
                          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                              <h6 class="text-uppercase fw-bold mb-4">
                                  Skills
                              </h6>
                              <p>
                                  <a href="!#" class="text-reset">Java Script</a>
                              </p>
                              <p>
                                  <a href="!#" class="text-reset">Express Js</a>
                              </p>
                              <p>
                                  <a href="!#" class="text-reset">React Js</a>
                              </p>
                              <p>
                                  <a href="!#" class="text-reset">Angular Js</a>
                              </p>
                          </div>
                          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                              <p><i className="fas fa-home me-3"></i> Noida, Uttar Pradesh 201304, India</p>
                              <p>
                                  <i className="fas fa-envelope me-3"></i>
                                  yadavrohit00005@gmail.com, 9821121377
                              </p>
                              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                          </div>
                      </div>
                  </div>
              </section>

              <div className="text-center p-4">
                  © 2021 Copyright:
                  <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
              </div>
          </footer>
    </>
  )
}

export default Home;