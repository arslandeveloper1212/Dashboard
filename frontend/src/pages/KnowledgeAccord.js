import React, { useState } from 'react';

const KnowledgeAccord = () => {

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <div className="control-overwidth padding-given">
      <div className="container-fluid">
        <div className="row">
          <div className='d-flex flex-row align-items-center justify-content-between'>
            <h1 className='main-heading'>Knowledge Base / FAQ</h1>
            <div>
            <button className='btn btn-outline-secondary' style={{ margin: '0px 10px' }}>Create Category</button>
            <button className='btn btn-outline-secondary' style={{ margin: '0px 10px' }}>Export Data</button>
            </div>
          
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-lg-6 col-md-6 col-12'>
            <form className="d-flex">
              <input style={{ borderRadius: "15px", padding: "8px 16px" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>


        <div className="accordion mt-4" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className={`accordion-button ${activeAccordion === 1 ? '' : 'collapsed'}`}
                type="button"
                onClick={() => toggleAccordion(1)}
              >
                Company Name
              </button>
            </h2>
            <div
              id="collapseOne"
              className={`accordion-collapse collapse ${activeAccordion === 1 ? 'show' : ''}`}
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button ${activeAccordion === 2 ? '' : 'collapsed'}`}
                type="button"
                onClick={() => toggleAccordion(2)}
              >
                Category Name
              </button>
            </h2>
            <div
              id="collapseTwo"
              className={`accordion-collapse collapse ${activeAccordion === 2 ? 'show' : ''}`}
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className={`accordion-button ${activeAccordion === 3 ? '' : 'collapsed'}`}
                type="button"
                onClick={() => toggleAccordion(3)}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className={`accordion-collapse collapse ${activeAccordion === 3 ? 'show' : ''}`}
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default KnowledgeAccord;
