import React from 'react';
import '../App.css';

const Project = () => {
  return (
    <div className="p-6 h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Sertifikat 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200?text=Sertifikat+1"
            alt="Sertifikat 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-600">Sertifikat Web Development</h3>
            <p className="text-gray-600 mt-2">
              Sertifikat ini diberikan setelah menyelesaikan kursus Web Development lengkap, yang mencakup HTML, CSS, dan JavaScript.
            </p>
          </div>
        </div>

        {/* Sertifikat 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200?text=Sertifikat+2"
            alt="Sertifikat 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-600">Sertifikat ReactJS</h3>
            <p className="text-gray-600 mt-2">
              Sertifikat ini diberikan setelah menyelesaikan kursus ReactJS, mempelajari konsep dasar dan lanjutan React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
