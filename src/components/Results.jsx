import React from 'react';

export default function Results({ results }) {
  return (
    <div>
      {results && results.length > 0 ? (
        results.map((result) => (
          <div key={result.id}>
            {result.original_name}
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
