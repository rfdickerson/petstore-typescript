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
                <img src="{this.props.currentPet.imageUrls[0]}" />
            </Panel> )
    }
}