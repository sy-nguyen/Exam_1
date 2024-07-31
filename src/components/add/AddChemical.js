import React, {useState} from "react";
import { Form, Row, Col, Label, Input, Button} from "reactstrap";
import "./add.css"

export default function AddChemical(props) {
    const {handle_add} =props
    const [textN, setTextN] = useState("")
    const [textF, setTextF] = useState("")
  return (
    <div className="form">
      <Form>
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col>
            <Label className="visually-hidden" for="exampleAdd">
              Name
            </Label>
            <Input
              id="exampleAdd"
              name="name"
              placeholder="Name"
              type="text"
              className="nhap"
              value={textN}
              onChange={(e) => setTextN(e.target.value)}
            />
          </Col>
          <Col>
            <Label className="visually-hidden" for="exampleFor">
              Formula
            </Label>
            <Input
              id="exampleFor"
              name="formula"
              placeholder="Fomula"
              type="text"
              className="nhap"
              value={textF}
              onChange={(e) => setTextF(e.target.value)}
            />
          </Col>
          <Col>
            <Button className="btn btn-warning" onClick={()=> {
                handle_add({name:textN,formula:textF})
                setTextF("")
                setTextN("")
            }}>Add</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
