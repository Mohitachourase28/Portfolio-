/* eslint-disable no-unused-vars */
// AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "chart.js/auto";

const AdminDashboard = () => {
//   const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [analytics, setAnalytics] = useState([]);

  // const token = localStorage.getItem('token');

  //   useEffect(() => {
  //     // Removed token check
  //     // if (!token) return navigate('/login');

  //     axios
  //       .get(
  //         `/admin/events?page=${page}&limit=5`
  //         // , {
  //         // headers: { Authorization: `Bearer ${token}` },
  //         // }
  //       )
  //       .then((res) => {
  //         setEvents(res.data.events);
  //         setTotalPages(res.data.totalPages);
  //       })
  //       .catch((err) => {
  //         if (err.response?.status === 403) navigate("/");
  //       });

  //     axios
  //       .get(
  //         "/admin/analytics"
  //         // , {
  //         // headers: { Authorization: `Bearer ${token}` },
  //         // }
  //       )
  //       .then((res) => setAnalytics(res.data.topEvents))
  //       .catch(() => {});
  //   }, [page]);

  useEffect(() => {
    // Mock data for testing without API
    setEvents([
      { _id: "1", title: "Mock Event 1", description: "Description 1" },
      { _id: "2", title: "Mock Event 2", description: "Description 2" },
    ]);

    setAnalytics([
      { title: "Mock Event 1", views: 100 },
      { title: "Mock Event 2", views: 150 },
    ]);
  }, []);

  const chartData = {
    labels: Array.isArray(analytics)
      ? analytics.map((event) => event.title)
      : [],
    datasets: [
      {
        label: "Views",
        data: Array.isArray(analytics)
          ? analytics.map((event) => event.views)
          : [],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Admin Dashboard</h1>
      </div>

      {/* Chart */}
      <div className="mb-6">
        <h2 className="text-xl mb-2">Top Events by Views</h2>
        <Bar data={chartData} />
      </div>

      {/* Event List */}
      <div>
        <h2 className="text-xl mb-2">Pending Events</h2>
        <ul className="divide-y divide-gray-200">
          {Array.isArray(events) && events.length > 0 ? (
            events.map((event) => (
              <li key={event._id} className="py-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-sm text-gray-500">{event.description}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => updateStatus(event._id, "approve")}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(event._id, "reject")}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No events to show.</p>
          )}
        </ul>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${
                page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  function updateStatus(eventId, action) {
    axios
      .put(
        `/admin/events/${eventId}/${action}`
        // , {}, {
        // headers: { Authorization: `Bearer ${token}` },
        // }
      )
      .then(() => {
        setEvents((prev) => prev.filter((e) => e._id !== eventId));
      });
  }
};

export default AdminDashboard;
