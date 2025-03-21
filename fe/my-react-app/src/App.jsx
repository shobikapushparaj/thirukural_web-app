import { useEffect, useState } from "react";
import React from "react";
import "./index.css";

const API_BASE_URL = "https://thirukkural-api-f2606ac98b94.herokuapp.com";
const token = "a1b2c3d4e5f67890";

export default function App() {
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [kurals, setKurals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/chapters`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json()) // Fixed to parse JSON response
      .then((data) => setChapters(data))
      .catch((error) => console.error("Error fetching chapters:", error));
  }, []);

  const fetchKurals = (chapterId, page = 1) => {
    fetch(`${API_BASE_URL}/api/chapters/${chapterId}/kurals?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json()) // Fixed to parse JSON response
      .then((data) => {
        setKurals(data.kurals);
        setSelectedChapter(chapterId);
        setCurrentPage(page);
      })
      .catch((error) => console.error("Error fetching kurals:", error));
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Thirukkural Chapters</h2>
        <ul>
          {chapters.map((chapter) => (
            <li
              key={chapter.id}
              onClick={() => fetchKurals(chapter.id)}
              className={selectedChapter === chapter.id ? "selected" : ""}
            >
              {chapter.id}. {chapter.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h2>Kurals</h2>
        {kurals.length > 0 ? (
          <div>
            {kurals.map((kural) => (
              <div key={kural.id} className="kural-card">
                <p className="kural-title">
                  {kural.id}. {kural.line1}
                </p>
                <p>{kural.line2}</p>
              </div>
            ))}

            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => fetchKurals(selectedChapter, currentPage - 1)}
              >
                Previous
              </button>
              <button onClick={() => fetchKurals(selectedChapter, currentPage + 1)}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <p>Select a chapter to view Kurals.</p>
        )}
      </div>
    </div>
  );
}
