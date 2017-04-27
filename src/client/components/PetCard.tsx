import * as React from 'react';

import { Label, Thumbnail, Grid, Col, Row } from 'react-bootstrap'
import { Pet } from '../../models/Pet'

export interface PetCardProps { 
    currentPet: Pet 
}

export class PetCard extends React.Component<PetCardProps, undefined> {

    render() {
        return (
            <Thumbnail src={this.props.currentPet.photoUrls[0]}>
                <h3>{this.props.currentPet.name}</h3>

                <Grid>
                    <Row>
                        
                {
                 this.props.currentPet.tags.map((tag) => (
                    <Col xs={6} md={1}>
                        <Label>{tag}</Label>
                    </Col>
                 ))
                }
                        
                    </Row>
                </Grid>

            </Thumbnail> )
    }
}