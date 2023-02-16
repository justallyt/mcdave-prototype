import React from 'react'

const SingleServiceBody = ( { data }) => {
  return (
    <div className='single-service-body-section'>
            <div className="inner-row">
                     <div className="single-section-content">
                              <div className="single-service-intro">
                                       <h3>{data.text_main}</h3>
                                       <p>{data.text_main_description}</p>
                              </div>
                              <h4>{data.simple_title}</h4>

                              { data.examples ?   
                                      <div className="products-row">
                                         { data.examples.map(item => 
                                            <div key={item.id} className="simple-product">
                                                     <img src={item.image} alt="" />
                                                     <div className="simple-product-text">
                                                             <h2>{item.name}</h2>   
                                                     </div>
                                            </div>
                                        )}
                              </div>            
                              :
                               null
                               }

                              { data.services ? 
                                    <div className="service-custom-row">
                                            { data.services.map(item => 
                                              <div key={item.id} className="service-custom-moja">
                                                       <div className="service-custom-image">
                                                             <img src={item.image} alt="" />
                                                       </div>
                                                       <div className="service-custom-description">
                                                              <div className="custom-description-inner">
                                                                      <h2>{item.title}</h2>
                                                                      <p>{item.description}</p>
                                                              </div>
                                                       </div>
                                               </div>
                                                )}
                                     </div>
                                 :
                                 null
                              }
                     </div>
            </div>
    </div>
  )
}

export default SingleServiceBody