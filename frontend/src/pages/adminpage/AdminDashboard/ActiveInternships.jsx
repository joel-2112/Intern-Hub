import { useState, useEffect } from "react";
import axios from "axios";

const ActiveInternships = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetchActiveInternships();
  }, []);

  const fetchActiveInternships = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/active-internships"
      );
      setInternships(response.data);
    } catch (error) {
      console.error("Error fetching active internships:", error);
    }
  };

  return (
    <div className="bg-white border border-[#E7E7E7] rounded-lg p-5 h-auto">
      <div className="flex flex-col gap-1 mb-5">
        <span className="text-base font-medium text-[#212B36]">
          Active Internships
        </span>
        <span className="text-xs text-[#637381]">
          List of currently active internships
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#F4F6F8]">
            <tr>
              {[
                "Internship Title",
                "Company Name",
                "Posted Date",
                "Applicants",
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-[#637381] uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {internships.map((internship, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {internship.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {internship.company?.companyDetails?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(internship.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {internship.applicants}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveInternships;
