import React from "react";

const Home = () => {
  return (
    <section className="bg-slate-600 h-fit font-sans">
      <div className="infos py-4 px-5">
        <h2 className="text-3xl underline">
          Getting Started with Redux Toolkit
        </h2>
        <br />

        <h2 className="text-xl ">Purpose</h2>
        <br />
        <p>
          The Redux Toolkit package is intended to be the standard way to write
          Redux logic. It was originally created to help address three common
          concerns about Redux:
        </p>
        <br />
        <ul className="list-disc px-4">
          <li> "Configuring a Redux store is too complicated"</li>
          <li>
            "I have to add a lot of packages to get Redux to do anything useful"
          </li>
          <li> "Redux requires too much boilerplate code"</li>
        </ul>
        <br />
        <p>
          We can't solve every use case, but in the spirit of create-react-app,
          we can try to provide some tools that abstract over the setup process
          and handle the most common use cases, as well as include some useful
          utilities that will let the user simplify their application code.
        </p>
        <br />
        <p>
          Redux Toolkit also includes a powerful data fetching and caching
          capability that we've dubbed "RTK Query". It's included in the package
          as a separate set of entry points. It's optional, but can eliminate
          the need to hand-write data fetching logic yourself.
        </p>
        <br />
        <p>
          These tools should be beneficial to all Redux users. Whether you're a
          brand new Redux user setting up your first project, or an experienced
          user who wants to simplify an existing application, Redux Toolkit can
          help you make your Redux code better.
        </p>

        <br />
        <h2 className="text-3xl">Installation</h2>
        <br />
        <h2 className="text-xl">Create a React Redux App</h2>
        <br />
        <p>
          The recommended way to start new apps with React and Redux is by using
          our official Redux+TS template for Vite, or by creating a new Next.js
          project using Next's with-redux template.
          <br />
          Both of these already have Redux Toolkit and React-Redux configured
          appropriately for that build tool, and come with a small example that
          demonstrates how to use several of Redux Toolkits features.
        </p>
        <br />
        <p className="bg-gray-700 w-2/4 font-bold">
          # Vite with our Redux+TS template <br />
          # (using the `degit` tool to clone and extract the template) <br />#
          npx degit reduxjs/redux-templates/packages/vite-template-redux my-app{" "}
          <br />
          # Next.js using the `with-redux` template <br /># npx create-next-app
          --example with-redux my-app
        </p>
        <br />
        <h2 className="text-2xl">An Existing App</h2>
        <p>
          Redux Toolkit is available s package on NPM for use with a module
          bundler or in Node Application
        </p>
        <br />
        <div className="container-1 bg-gray-700 w-1/4 font-bold">
          <h2 className="text-xl">Via NPM</h2>
          <p> npm install @reduxjs/toolkit</p>
          <p>if you need React bindings:</p>
          <p>npm install react-redux</p>
        </div>
        <br />
        <div className="container-1 bg-gray-700 w-1/4 font-bold">
          <h2 className="text-xl">Via YARN</h2>
          <p>yarn add @reduxjs/toolkit</p>
          <p>yarn add react-redux</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="infos px-5">
        <h2 className="text-3xl">What's included</h2>
        <br />
        <h2 className="text-2xl">Redux Toolkit includes these APIs</h2>
        <br />
        <ul className="list-disc py-4 px-4">
          <li>
            <p className="bg-gray-800 w-fit text-purple-500">
              configureStore()
            </p>
            <p>
              wraps createStore to provide simplified configuration options and
              good defaults. It can automatically combine your slice reducers,
              adds whatever Redux middleware you supply, includes redux-thunk by
              default, and enables use of the Redux DevTools Extension.
            </p>
          </li>
          <br />
          <li>
            <p className="bg-gray-800 w-fit text-purple-500">createReducer()</p>
            <p>
              that lets you supply a lookup table of action types to case
              reducer functions, rather than writing switch statements. In
              addition, it automatically uses the immer library to let you write
              simpler immutable updates with normal mutative code, like
              state.todos[3].completed = true.
            </p>
          </li>
          <br />
          <li>
            <p className="bg-gray-800 w-fit text-purple-500">createAction</p>
            <p></p>
          </li>
          <br />
          <li>
            <p className="bg-gray-800 w-fit text-purple-500"></p>
            <p></p>
          </li>
          <br />
        </ul>
      </div>
    </section>
  );
};

export default Home;
