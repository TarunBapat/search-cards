import { useState, useEffect } from "react";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [dataValue, setDataValue] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    const data = await response.json();
    setDataValue(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const searchData = () => {
  //   const filteredData = dataValue.filter((val) =>
  //     val.title.includes(searchValue)
  //   );
  //   setDataValue(filteredData);
  // };
  return (
    <div className="App">
      <h1>Search Cards</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter value to be searched"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        {/* <Button onClick={searchData}>Search</Button> */}
      </InputGroup>
      <div className="d-flex justify-content-around align-items-center flex-wrap">
        {dataValue
          .filter((val) => {
            if (searchValue === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return val;
            }
          })
          .map(({ id, title, url }) => {
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

      {/* <button onClick={fetchData}>fetch Data</button> */}
    </div>
  );
}
