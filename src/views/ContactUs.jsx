import React from "react";

const ContactUs = () => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#6c63ff", marginBottom: "20px" }}>
        Contact Us
      </h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            color: "#555",
          }}
        >
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            style={{
              padding: "10px",
              border: "1px solid #6c63ff",
              borderRadius: "8px",
              fontSize: "14px",
              marginTop: "5px",
              outline: "none",
            }}
          />
        </label>
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            color: "#555",
          }}
        >
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            style={{
              padding: "10px",
              border: "1px solid #6c63ff",
              borderRadius: "8px",
              fontSize: "14px",
              marginTop: "5px",
              outline: "none",
            }}
          />
        </label>
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            color: "#555",
          }}
        >
          Message:
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="5"
            style={{
              padding: "10px",
              border: "1px solid #6c63ff",
              borderRadius: "8px",
              fontSize: "14px",
              marginTop: "5px",
              outline: "none",
              resize: "none",
            }}
          ></textarea>
        </label>
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#6c63ff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            alignSelf: "center",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#574b9f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#6c63ff")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
