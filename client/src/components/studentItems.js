import React, { Component } from 'react';
import { Card, CardTitle, CardText, Grid, Cell } from 'react-mdl';
import './../App.css';

class StudentItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }
  render() {
    const { data } = this.state;
    console.log(data.firstName);
    return (
      <div style={{width: '30%', margin: 'auto', display: 'inline-block'}}>
        <Grid className="demo-grid-2">
          <Cell col={1}>
            <Card shadow={10} style={{ minWidth: '300', background: '#cc4f49' }}>
              <CardTitle expand style={{ alignItems: 'flex-start', height: '30px', color: '#fff' }}>
                <h4>
                  {data.firstName} {data.lastName}
                </h4>
              </CardTitle>
              <CardText expand style={{ alignItems: 'flex-start' }}>
                <h5>
                  {data.gender} <br />
                  {data.age} <br />
                  {data.department} <br />
                  {data.country} <br />
                  
                </h5>
              </CardText>
            </Card>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default StudentItems;