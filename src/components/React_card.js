import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { Card, CardHead, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';
class React_card extends React.Component{
  render(){
    return (
      <Grid gutter="md">
        <GridItem span={5}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#0000FF"}}><b>Parth Paliwal</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Parth Paliwal is a freshman at Evergreen Valley High School and is the co-founder of Rare Bird Finder. His hobbies include coding, watching birds, making rap songs and playing video games.</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b> Favorite Bird: Tropical Kingbird</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Age: 14</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={5}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#0000FF"}}><b>Ananth Ramaswamy</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Ananth Ramaswamy is also a freshman at Evergreen Valley High School. Ananth is interested in birding and programming in Python, Javascript and Swift. </b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Favorite Bird: American Crow </b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Age: 14</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={5}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#0000FF"}}><b>What is Rare Bird Finder? </b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Rare Bird Finder fetches data from an API in ebird. It processes the data and displays the data in a list pattern and with the added feature of locating each rare species in google maps. Users with accounts can login and alert the admins and other users if they spot any rare bird.</b></CardBody>
        </Card>
        </GridItem>
        <GridItem span={5}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#0000FF"}}><b>How it works</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis convallis convallis tellus id interdum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Dictumst quisque sagittis purus sit amet volutpat consequat. Ornare arcu odio ut sem nulla pharetra diam. Cursus in hac habitasse platea dictumst quisque sagittis. Aliquam nulla facilisi cras fermentum odio. Sed id semper risus in. Metus aliquam eleifend mi in nulla. Nibh cras pulvinar mattis nunc. Tortor pretium viverra suspendisse potenti nullam.</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Days until return: 4</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Author: Suzanne Collins</b></CardFooter>
        </Card>
        </GridItem>
        
      </Grid >


    );
  }
}
export default React_card;
