'use client';

function JobCard({ job }) {
  return (
    <div className="p-3 rounded-xl border bg-white hover:shadow transition">
      <div className="text-sm font-medium">{job.name}</div>
      <div className="text-xs text-gray-500 whitespace-pre-line mt-1">{job.address}</div>
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-gray-500">{job.id}</span>
        <button className="px-3 py-1 rounded-lg border text-sm hover:bg-gray-50">Assign</button>
      </div>
    </div>
  );
}

export default JobCard;