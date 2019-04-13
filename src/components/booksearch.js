import React from "react";
import {Form, FormGroup, Label, Input, Button,} from 'reactstrap';

function BookSearch(props) {
    return (
        <div>
        <Form>
          <FormGroup>
            <Label for="bookSearch">Book Search</Label>
            <Input type="search" name="search" id="bookSearch" placeholder="Please enter the book name here" />
          </FormGroup>
          <Button className="mb-3" color="primary">Search</Button>
        </Form>
        </div>
    )
  }

export default BookSearch;