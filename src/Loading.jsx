function Loading({ size = "30px", message }) {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ fontSize: size }}>
        {message ? message : "Loading..."}
      </h2>
    </div>
  );
}

export default Loading;