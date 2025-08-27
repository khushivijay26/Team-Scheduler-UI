"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const members = [
  "Member 1", "Member 2", "Member 3", "Member 4", "Member 5",
  "Member 6", "Member 7", "Member 8", "Member 9", "Member 10", "Member 11",
];

const events = [
  { member: 2, start: "08:00", end: "08:30", name: "Client A" },
  { member: 2, start: "10:00", end: "10:45", name: "Client B" },
  { member: 5, start: "09:30", end: "10:00", name: "Client C" },
  { member: 5, start: "11:30", end: "12:00", name: "Client D" },
  { member: 5, start: "13:30", end: "14:00", name: "Client E" },
  { member: 10, start: "12:00", end: "13:00", name: "Client F" },
];

const startHour = 6;
const endHour = 14;
const slots = Array.from(
  { length: (endHour - startHour) * 2 },
  (_, i) => startHour + i * 0.5
);

function timeToIndex(time) {
  const [h, m] = time.split(":").map(Number);
  return (h - startHour) * 2 + (m / 30);
}

function formatTime(t) {
  const [h, m] = t.split(":").map(Number);
  const h12 = h > 12 ? h - 12 : h;
  const ampm = h >= 12 ? "pm" : "am";
  return `${h12}:${m === 0 ? "00" : m}${ampm}`;
}

function Timeline() {
  return (
    <div className="border rounded-xl overflow-hidden bg-white flex flex-col">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-3 border-b bg-white">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <select className="text-sm border rounded px-2 py-1">
            <option>Status</option>
          </select>
          <select className="text-sm border rounded px-2 py-1">
            <option>Team</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 sm:justify-center">
          <select className="text-sm border rounded px-2 py-1">
            <option>1 hour</option>
            <option>30 min</option>
            <option>15 min</option>
          </select>
          <select className="text-sm border rounded px-2 py-1">
            <option>Day</option>
            <option>Week</option>
            <option>Month</option>
          </select>

          <div className="flex items-center border rounded overflow-hidden">
            <button className="flex items-center justify-center px-2 py-1 hover:bg-gray-100">
              <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
            </button>
            <span className="px-3 py-1 text-sm">Today</span>
            <button className="flex items-center justify-center px-2 py-1 hover:bg-gray-100">
              <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `200px repeat(${slots.length}, 80px)`,
          }}
        >
          <div className="sticky left-0 bg-gray-50 z-10 border-b px-4 py-2 font-medium">
            Team
          </div>
          {Array.from({ length: endHour - startHour }, (_, i) => startHour + i).map(
            (hour, i) => (
              <div
                key={i}
                className="border-b border-l text-xs text-gray-500 text-center py-2"
                style={{ gridColumn: "span 2" }}
              >
                {hour > 12 ? hour - 12 : hour}
                {hour >= 12 ? "pm" : "am"}
              </div>
            )
          )}

          {members.map((member, i) => (
            <>
              <div
                key={member}
                className="sticky left-0 bg-white border-b px-4 py-2 flex items-center gap-2 z-10"
              >
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                {member}
              </div>

              {slots.map((_, idx) => (
                <div
                  key={`${member}-${idx}`}
                  className="border-b border-l h-14 relative"
                >
                  {events
                    .filter((e) => e.member === i + 1)
                    .map((e, j) => {
                      const startIndex = timeToIndex(e.start);
                      const endIndex = timeToIndex(e.end);
                      if (idx === Math.floor(startIndex)) {
                        return (
                          <div
                            key={j}
                            className="absolute inset-y-1 left-1 right-1 bg-blue-100 border border-blue-300 rounded px-2 py-1 text-xs flex flex-col justify-center"
                            style={{
                              gridColumn: `span ${endIndex - startIndex}`,
                              width: `${(endIndex - startIndex) * 80 - 8}px`,
                            }}
                          >
                            <div className="font-medium">{e.name}</div>
                            <div className="text-[10px] text-gray-600">
                              {formatTime(e.start)} - {formatTime(e.end)}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;