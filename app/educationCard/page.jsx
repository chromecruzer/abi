import React from "react";

const EducationCard = ({ school, degree, percentage, cgpa, year }) => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold">{school}</h3>
      <p>{degree}</p>
      {percentage && <p>Percentage: {percentage}</p>}
      {cgpa && <p>CGPA: {cgpa}</p>}
      <p>Year: {year}</p>
    </div>
  );
};

export default EducationCard;
