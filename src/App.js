import React, { Component } from 'react';
import NaviBar from "../src/components/navbar";
import Jumbo from "../src/components/jumbo";
import BookSearch from "../src/components/booksearch"

import {
  Table, Button

} from 'reactstrap';


class App extends Component {

  render() {
    return (
        
      
      <div className="App container">
      
      <NaviBar />      
      
      <Jumbo />
      <BookSearch />

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>This is a test</td>
              <td>3.5</td>
              <td>
                <Button color="success" size="sm" className="mr-2">Edit</Button>
                <Button color="danger" size="sm">Delete</Button>
              </td>
            </tr>
          </tbody>

        </Table>

      </div>
    );
  }
}

export default App;


