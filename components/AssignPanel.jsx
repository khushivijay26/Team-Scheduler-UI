'use client';
import { useState } from "react";
import JobCard from "./JobCard";

const jobs = Array.from({ length: 3 }, (_, i) => ({
  id: `JOB${106731 + i}`,
  name: "Cameron Williamson",
  address: "4140 Parker Rd.\nAllentown, New Mexico 31134",
}));

function AssignPanel() {
  const [filter, setFilter] = useState("assigned");

  return (
    <aside className="space-y-3">
      <div className="flex items-center justify-between border-b px-2 py-2">
        <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
          <button
            className={`px-3 py-1 text-sm rounded-md transition ${
              filter === "assigned"
                ? "bg-white shadow-sm font-medium"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setFilter("assigned")}
          >
            Assigned
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md transition ${
              filter === "unassigned"
                ? "bg-white shadow-sm font-medium"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setFilter("unassigned")}
          >
            Unassigned
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="font-semibold px-2">Assign All ✨</div>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </aside>
  );
}

export default AssignPanel;