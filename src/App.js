import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [dataValue, setDataValue] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    const data = await response.json();
    setDataValue(data);
    console.log(data);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="d-flex justify-content-between align-items-center flex-column">
        {dataValue.map(({ id, title, url }) => {
          return (
            <>
              <Card style={{ width: "18rem", marginBottom: "2rem" }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>

                  <Button variant="success">checkout card {id}</Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>

      <button onClick={fetchData}>fetch Data</button>
    </div>
  );
}
