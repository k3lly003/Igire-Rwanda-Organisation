"use client";
import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-20">
      {children}
    </div>
  );
};

export default Container;
