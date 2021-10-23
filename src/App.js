import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/IndexPage";
import ActiveSpace from "./pages/ActiveSpacePage";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col sm="12" lg="12" md="12" className="p-0">
          <Router>
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/active-space" exact component={ActiveSpace} />
            </Switch>
          </Router>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
