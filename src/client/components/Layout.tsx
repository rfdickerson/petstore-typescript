import * as React from "react"

// components
import { MessageBox } from "./MessageBox";
import { Button, Panel } from 'react-bootstrap'
import { PetCard } from './PetCard'

// models
import { Pet } from "../../models/Pet";
import { ApiResponse, readApiResponse } from "../../models/ApiResponse";

interface LayoutState {
    code: number
    message: string,
    pets: Array<Pet>
}

export class Layout extends React.Component<undefined, LayoutState> {

    constructor() {
        super()
        this.state = { 
            code: 200,
            message: "hello!",
            pets: []
        }
    }

    loadData() {
        fetch("data.json")
            .then(response => response.json()) 
            .then( (json: any) => {

                console.log(json)

                let r = readApiResponse(json)

                console.log(r)

                this.setState( {message : r.message })

            })
            .catch ( (error) => {
                console.log(error)
            })

        fetch("pet/4")
            .then(response => response.json())
            .then ( (json: any) => {

            })
            .catch( (error) => {
                console.log(error)
            })

    }

    componentDidMount() {
        this.loadData()
    }

    clickedMe() {
        console.log('I was clicked!')
    }

    render() {
        return (
            <div>
                <Panel header="Server Message">
                    {this.state.message}
                </Panel>
                <Button onClick={this.clickedMe} bsStyle="primary">Press Me!</Button>
                {
                    this.state.pets.map((pet) => (
                        <PetCard currentPet={pet} />
                    ))
                }
            </div> )
    }
}