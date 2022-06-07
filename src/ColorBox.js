
export function ColorBox({ color }) { //destructuring the object
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "250px",
    marginTop: "10px",
    borderRadius: "8px",
  };

  return <div style={styles}></div>;
}
