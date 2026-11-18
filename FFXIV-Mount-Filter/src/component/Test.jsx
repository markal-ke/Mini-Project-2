import React, { useState } from 'react';

const AVAILABLE_NAMES = ['Alice', 'Bob', 'Charlie', 'Diana', 'Evan', 'Fiona'];

export default function SearchChecklist() {
  const [query, setQuery] = useState('');
  const [checklist, setChecklist] = useState([
    { id: 1, name: 'Alice', checked: false },
  ]);

  // Filter suggestions based on the search query (excluding names already in the checklist)
  const suggestions = AVAILABLE_NAMES.filter(
    (name) =>
      name.toLowerCase().includes(query.toLowerCase()) &&
      !checklist.some((item) => item.name.toLowerCase() === name.toLowerCase())
  );

  // Add a name to the checklist
  const handleAddName = (nameToAdd) => {
    const trimmedName = nameToAdd.trim();
    if (!trimmedName) return;

    // Prevent duplicate entries
    const alreadyExists = checklist.some(
      (item) => item.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (!alreadyExists) {
      setChecklist((prev) => [
        ...prev,
        { id: Date.now(), name: trimmedName, checked: false },
      ]);
    }
    setQuery(''); // Clear the search bar after adding
  };

  // Handle form submission (pressing Enter)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddName(query);
  };

  // Toggle checkbox status
  const toggleCheck = (id) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div style={{ maxWidth: '400px', fontFamily: 'sans-serif' }}>
      <h3>Team Checklist</h3>

      {/* Search / Add Form */}
      <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="Search or add a name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 12px' }}>
          Add
        </button>
      </form>

      {/* Autocomplete Suggestions Dropdown */}
      {query.trim() !== '' && suggestions.length > 0 && (
        <ul
          style={{
            listStyle: 'none',
            padding: '4px',
            margin: '4px 0',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          {suggestions.map((name) => (
            <li
              key={name}
              onClick={() => handleAddName(name)}
              style={{
                padding: '6px 8px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
              }}
            >
              + Add <strong>{name}</strong>
            </li>
          ))}
        </ul>
      )}

      {/* Active Checklist */}
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px' }}>
        {checklist.map((item) => (
          <li key={item.id} style={{ marginBottom: '8px' }}>
            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleCheck(item.id)}
              />
              <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                {item.name}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}