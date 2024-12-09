function Matrix({ size = 20 }) {
  const start = size / 2 - 1,
    end = size / 2;

  return (
    <section
      className="fixed -z-50 inset-0 bg-fixed"
      style={{
        "background-image": `repeating-linear-gradient(#0000 0 ${start}px, #222 ${start}px ${end}px, #0000 0), repeating-linear-gradient(90deg, #0000 0 ${start}px, #222 ${start}px ${end}px, #0000 0)`,
        "background-size": size + "px",
      }}
    />
  );
}

export default Matrix;
