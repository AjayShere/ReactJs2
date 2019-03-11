import React from 'react';
import OccamyText from 'react-occamy-text';
import {NavLink} from  "react-router-dom";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button , Col , Row} from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';


class StyleStats extends React.Component{

    render(){
        return(
            <div>
<Row>
<Col sm="2">
<Card>
        <CardBody>
          <CardTitle>Total Value of clostet</CardTitle>
          <CardSubtitle>20,000</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
</Card>
</Col>

<Col sm="2">
<Card>
        <CardBody>
          <CardTitle>Total Number of closet</CardTitle>
          <CardSubtitle>40</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
</Card>
</Col>


<Col sm="2">
<Card>
        <CardBody>
          <CardTitle>Most worn cloths</CardTitle>
          <CardSubtitle>30</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
</Card>
</Col>
</Row>


<br/>

<Row>
<Col sm="2">
      <Card>
        <CardBody>
          <CardTitle>Least worn cloths</CardTitle>
          <CardSubtitle>35</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
</Col>

<Col sm="2">
 <Card>
        <CardBody>
          <CardTitle>Never worn cloths</CardTitle>
          <CardSubtitle>25</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
</Col>


<Col sm="2">
 <Card>
        <CardBody>
          <CardTitle>Your Fav cloths</CardTitle>
          <CardSubtitle>10</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
</Col>
</Row>

    </div>
        );
    }
}

 export default StyleStats;