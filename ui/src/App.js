import React from "react";
import { useQuery } from "react-query";
import "./App.css";

function App() {
  const { status, data, error, isFetching } = useQuery("users", async () => {
    const response = await fetch("/api/user", {
      headers: { Accept: "application/json" }
    });
    const json = response.json();
    return json;
  });
  return (
    <div className="App">
      <h1>Users</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data && (
                <div>
                  {data.map(({ id, email }) => (
                    <div key={id}>
                      {id}: {email}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
