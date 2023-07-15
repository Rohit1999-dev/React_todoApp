import React from 'react'
import { useState } from 'react';


function CreateTodo() {

    const [activity, setActivity] = useState("");
    
    const [listData, setListData] = useState([]);

    const addActivity = ()=>{
        // setListData([...listData, activity])
        // console.log(listData);
        setListData((listData)=>{
            const updatedList = [...listData, activity];
            console.log(updatedList);
            setActivity("");
            return updatedList
        })
    }

    const removeActivity = (i)=>{
        const updatedListData = listData.filter((elem, id)=>{
            return i !== id;
        })
        setListData(updatedListData);
    }

    const removeAllActivity = ()=>{
        setListData([]);
    }

  return (
    <>
          <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
              <div className="container-fluid">
                  <a className="navbar-brand" href="!#">Create Todo</a>
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

          <div className='main'>
            <div className='form-container'>
                <div className='header'>
                <input type="text" placeholder='Create Todo Here..' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
                <button style={{backgroundColor: 'green'}} onClick={addActivity}>Add</button>
                </div>
            </div>
          </div>

          <p className='todo-heading'>Todo list here</p>

          <div>
              <div className="row">
                  <div className="col-sm">
                    <div class="card">
                      {listData !== [] && listData.map((data, i) => {
                          return (
                              <>
                                  <div class="card-body">
                                      <h5 class="card-title">Title</h5>
                                      <p class="card-text">{data}</p>
                                      <button href="!#" class="btn btn-primary" onClick={()=>removeActivity(i)}>Remove</button>
                                  </div>
                              </>
                          )
                      })}
                      {listData.length >= 1 && <button class="btn btn-primary" onClick={removeAllActivity}>Remove All</button>}
                  </div>
                  </div>
              </div>
          </div>

          <footer className="bg-dark text-center text-white">
                  <section className="">
                      <div className="text-center text-md-start mt-5">
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
                              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                  <h6 className="text-uppercase fw-bold mb-4">
                                      Skills
                                  </h6>
                                  <p>
                                      <a href="!#" className="text-reset">Java Script</a>
                                  </p>
                                  <p>
                                      <a href="!#" className="text-reset">Express Js</a>
                                  </p>
                                  <p>
                                      <a href="!#" className="text-reset">React Js</a>
                                  </p>
                                  <p>
                                      <a href="!#" className="text-reset">Angular Js</a>
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

export default CreateTodo;
