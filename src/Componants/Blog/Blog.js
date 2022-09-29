import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="text-center">
        <h1>Welcome to our Blog</h1>
        <small>read it regularly and take advantage of tech knowledge!!!!!</small>
      </div>
        <hr/>
        <br/>
        <section class="container">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Question:how does react work?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                     With the help of React virtual dom, React uses a declarative paradigm that makes it easier to reason about our application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when data changes.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   what are the differences between Props and State?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Question:  What are the uses of useEffect Hook except data loading from API?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        <p>
                        The useEffect Hook allows you to perform side effects in your components.
                        Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional.
                            Other uses are ...........
                        Running once on mount: fetch API data.
                        Running on state change: validating input field.
                        Running on state change: live filtering.
                        Running on state change: trigger animation on new array value.
                        Running on props change: update paragraph list on fetched API data update.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
        </section>
        </div>
    );
};

export default Blog;