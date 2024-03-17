import React from 'react';
import { Switch, Route } from 'react-router-dom';

function RegistrationPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
        </div>
        {/* Registration form goes here */}
      </div>
    </div>
  );
}

export default RegistrationPage;
