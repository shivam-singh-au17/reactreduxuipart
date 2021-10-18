import React, { useState } from "react";
import { useFetch } from "../Hooks/CustomHooks";

const GithubSearchHooks = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, data } = useFetch(
    `https://api.github.com/search/users?q=${query || "masai"}&&page=${page}`
  );

  const handlePageChange = (value) => {
    if (page + value < 1) {
      return false;
    }
    setPage(page + value);
  };
  return (
    <div className="bg-warning p-4 mt-5">
      <h1 className="text-center mb-3"> Github user search </h1>
      <input
        value={query}
        className="form-control"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary" onClick={() => handlePageChange(-1)}>
        {" "}
        PREV{" "}
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={() => handlePageChange(1)}
      >
        {" "}
        NEXT{" "}
      </button>
      <div className="fs-4">
        <table class="table">
          <thead className="bg-dark text-light">
            <tr>
              <th scope="col">User No</th>
              <th scope="col">Id</th>
              <th scope="col">Login</th>
              <th scope="col">UserImg</th>
            </tr>
          </thead>
          <tbody className="bg-danger text-light">
            {loading && "LOADING"}
            {!loading &&
              data &&
              data.items.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{i}</td>
                    <td>{item.id}</td>
                    <td>{item.login}</td>
                    <td>
                      <img
                        src={`${item.avatar_url}`}
                        alt="User"
                        style={{ width: "30px" }}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GithubSearchHooks;
