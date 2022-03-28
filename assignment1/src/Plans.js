import React from "react";
function Plans({name,price,features}){
    return(
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{name}</h5>
            <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              {
                features.map((stat,i)=>{
                  return( <li className={!stat.enabled?"text-muted":""}><span className="fa-li"><i className={stat.enabled? "fas fa-check" :"fas fa-times"}></i></span>{stat.name}</li>)
                })
              }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Plans