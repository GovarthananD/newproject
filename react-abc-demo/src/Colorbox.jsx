export function Colorbox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "50px",
    width: "250px"
  };
  return <div style={styles}></div>;
}
