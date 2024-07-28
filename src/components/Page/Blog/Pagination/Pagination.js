"use client"
import React from "react";

const Pagination = ({ hasNextPage, hasPreviousPage, onPageChange, endCursor, startCursor }) => {
  return (
    <div className="flex justify-center mt-4">
      {hasPreviousPage && (
        <button onClick={() => onPageChange(startCursor)} className="mr-2">
          Previous
        </button>
      )}
      {hasNextPage && (
        <button onClick={() => onPageChange(endCursor)} className="ml-2">
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
