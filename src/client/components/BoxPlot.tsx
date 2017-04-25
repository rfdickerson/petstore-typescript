import * as React from 'react';
import * as D3 from 'd3';

export interface BoxPlotProps { data: Array<number>, domain: Object }

export class BoxPlot extends React.Component<undefined, undefined> {
  
  componentDidMount() {
    box()
  }

  render() {
    return <div id="viz"></div>
  }
}

let box = function() {

  var sampleSVG = D3.select("#viz")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100)

  sampleSVG.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 50)
    .on("mouseover", ()=> {D3.select("#viz").style("fill", "aliceblue")})
    .on("mouseout", () => {D3.select("#viz").style("fill", "white")})
  

}
