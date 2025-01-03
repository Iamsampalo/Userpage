import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched user data:", data); // Debugging
        setUser(data);
      })
      .catch((err) => {
        console.error("Error fetching user:", err.message);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!user) {
    return <p className="text-center text-lg">User not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{user.name || "Unknown"}'s Profile</h1>
      <div className="space-y-2">
        <p><strong>Email:</strong> {user.email || "Not available"}</p>
        <p><strong>Phone:</strong> {user.phone || "Not available"}</p>
        <p>
          <strong>Website:</strong>{' '}
          {user.website ? (
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user.website}
            </a>
          ) : (
            "Not available"
          )}
        </p>
        <p><strong>Company:</strong> {user.company?.name || "Not available"}</p>
        <p>
          <strong>Address:</strong>{' '}
          {user.address
            ? `${user.address.street}, ${user.address.city}`
            : "Not available"}
        </p>
      </div>
      <Link to="/">
        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Details;
