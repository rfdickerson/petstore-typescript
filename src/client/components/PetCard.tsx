import * as React from 'react';

import { Panel } from 'react-bootstrap'
import { Pet } from '../../models/Pet'

export interface PetCardProps { 
    currentPet: Pet 
}

export class PetCard extends React.Component<PetCardProps, undefined> {

    render() {
        return (
            <Panel>
                <h1>{this.props.currentPet.name}</h1>
                <img src={this.props.currentPet.photoUrls[0]} />
            </Panel> )
    }
}