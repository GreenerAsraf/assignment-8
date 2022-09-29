import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="text-center">
        <h1>Welcome to our Blog</h1>
        <small>read it regularly and take advantage of tech knowledge</small>
      </div>
        <hr/>
        <br/>
        <section class="container">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Question: What are the differences between local Storage and session storage?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        sessionStorage is similar to localStorage . The one major difference between localStorage and sessionStorage is the expiration date.  that means while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Question: how does the js event loop work?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks. The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task. The event loop allows us to use callbacks and promises
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Question:  What is difference between global scope and block scope?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        <p>
                            Variables declared Globally (outside any function) have Global Scope.
                            Global variables can be accessed from anywhere in a JavaScript program.
                            Variables declared with var, let and const are quite similar when declared outside a block.
                            They all have Global Scope. In a browser environment, the global scope is controlled by the window object while in Node. js, it's controlled by the global object. 
                        </p>
                     
                        
                        Variables declared inside a { } block cannot be accessed from outside the block: Block scopes are what you get when you use if statements, for statements, and the like.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Question: how many ways we get undefined?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        undefined is a property of the global object. That is, it is a variable in global scope. The initial value of undefined is the primitive value undefined.
                        In all non-legacy browsers, undefined is a non-configurable, non-writable property. (Even when this is not the case, avoid overriding it.)
                        A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.
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