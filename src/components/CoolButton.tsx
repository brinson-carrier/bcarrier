"use client";

import React from "react";

interface CoolButtonProps {
  text: string;
  onClick?: () => void;
}

const CoolButton: React.FC<CoolButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#007BFF",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "8px",
        padding: "10px 20px",
        width: "150px",
        height: "50px",
        fontSize: "16px",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        Object.assign(e.currentTarget.style, {
          backgroundColor: "#0056b3",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        })
      }
      onMouseLeave={(e) =>
        Object.assign(e.currentTarget.style, {
          backgroundColor: "#007BFF",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        })
      }
    >
      {text}
    </button>
  );
};

export default CoolButton;
