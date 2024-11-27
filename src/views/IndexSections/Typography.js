import React from "react";

export default function ProductGrid() {
  // Example array of fake products
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: `$${(Math.random() * 100).toFixed(2)}`,
    image: require("assets/img/logo.png"), // Import your logo image here
  }));

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "white", // Light blueish-white background
        minHeight: "100vh",
        borderRadius: "10px"
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Product Grid</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#fff",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <h3 style={{ margin: "10px 0", fontSize: "16px", color: "#004080" }}>
              {product.name}
            </h3>
            <p style={{ color: "#007bff", fontSize: "14px" }}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
