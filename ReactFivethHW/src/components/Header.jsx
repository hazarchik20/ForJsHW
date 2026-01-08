import React from 'react'

import "./Header.scss"
const Header = ({
  level,
  setLevel,
  setIsOnlyFree,
  setIsOnlyNew,
}) => {
  return (
    <div className="course-header">
      <div className="filter-group">
        <label className="filter-label" htmlFor="level">
          Level:
        </label>

        <select
          className="filter-select"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <label className="checkbox">
        <input
          type="checkbox"
          onChange={(e) => setIsOnlyFree(e.target.checked)}
        />
        <span>Only Free Courses</span>
      </label>

      <label className="checkbox">
        <input
          type="checkbox"
          onChange={(e) => setIsOnlyNew(e.target.checked)}
        />
        <span>Only New Courses</span>
      </label>
    </div>
  );
};

export default Header