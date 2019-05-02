import React from "react";
// Imnports to build the page
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// Function for when a book search yields no result with a 404 error message
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
// Exports
export default NoMatch;
