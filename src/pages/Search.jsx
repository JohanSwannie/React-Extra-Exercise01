import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, InputGroup, Table } from "react-bootstrap";
import { data } from "../data/inputData";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <Container className="relative top-20">
      <h2 className="text-center text-3xl mt-4 mb-4">
        Search for people (use Lowercase)
      </h2>
      <Form>
        <InputGroup className="my-2">
          <Form.Control
            type="search"
            placeholder="search people"
            onChange={(e) => setSearch(e.target.value)}
            className="placeholder-gray-950 placeholder-opacity-55 border-1 border-slate-600 p-2"
          />
        </InputGroup>
      </Form>
      <Table
        striped
        bordered
        hover
        className="border-1 border-slate-600 font-bold"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Home</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) =>
              search.toLocaleLowerCase() === ""
                ? item
                : item.name.toLocaleLowerCase().includes(search)
            )
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.home}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Search;
