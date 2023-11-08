import React from "react";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="container mx-auto">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Glad to see you on my website for chat!</p>
            <button className="btn btn-primary">Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
