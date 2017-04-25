import * as React from "react"

import { BoxPlot } from "./BoxPlot";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, undefined> {

    loadData() {
        fetch("data.json")
            .then(response => response.json()) 
            .then( json => {
                console.log(json)
            })
    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        return (
            <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            <BoxPlot />
        </div> )
    }
}