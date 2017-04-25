import * as React from "react"

import { MessageBox } from "./MessageBox";

// models
import { Pet } from "../../models/Pet";
import { ApiResponse } from "../../models/ApiResponse";

interface LayoutState {
    code: number
    message: string
}

export class Layout extends React.Component<undefined, LayoutState> {

    constructor() {
        super()
        this.state = { 
            code: 200,
            message: "hello!"
        }
    }

    loadData() {
        fetch("data.json")
            .then(response => response.json()) 
            .then ( json => {

            })
            .then( (json: any) => {

                console.log(json)

                let r: ApiResponse = json

                console.log(r)

                this.setState( {message : r.message })

            })
            .catch ()

    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        return (
            <div>
            <MessageBox code={this.state.code} message={this.state.message} />
        </div> )
    }
}