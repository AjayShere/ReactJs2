import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button , Col} from 'reactstrap';


class cardss extends React.Component{
render(){
    return(
        <div>

<h1>Hi Cardss</h1>

 <div>
     <Col sm="2">
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
    </div>
        </div>
    );
}
}

export default cardss;