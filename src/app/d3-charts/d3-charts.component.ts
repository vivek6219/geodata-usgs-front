import { Component, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ServerRequestComponent } from '../server-request/server-request.component';

@Component({
  selector: 'app-d3-charts',
  standalone: true,
  imports: [],
  templateUrl: './d3-charts.component.html',
  styleUrl: './d3-charts.component.css',
})
export class D3ChartsComponent implements OnInit {
  //variable declaration
  private jsonData: any;
  private exampleData = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];

  private svg: any;
  private margin = 200;
  private width = 1080 - (this.margin *2);
  private height = 1080 - (this.margin *2);
  
  constructor(
    private eqData: ServerRequestComponent
  ){}

  ngOnInit(): void {
    this.eqData.getEarthquakes().subscribe((result) => {
      this.jsonData = result;
    });
    console.log("NGONIT");
    this.createSvg();
    this.drawPlot();
  }
  
  private createSvg(): void{
    this.svg = d3.select("figure#scatter")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin *2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawPlot(): void{
    console.log("DRAW PLOT")
    //add x axis
    const x = d3.scaleLinear()
    .domain([2009, 2017])
    .range([0, this.width]);

    this.svg.append("g")
    .attr("transform", "translate(0," + this.height+ ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    //add y axis
    const y = d3.scaleLinear()
    .domain([0,200000])
    .range([this.height, 0]);
    
    this.svg.append("g")
    .call(d3.axisLeft(y));

    //add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
    .data(this.exampleData)
    .enter()
    .append("circle")
    .attr("cx", (d:any) => x(d.Released))
    .attr("cy", (d:any) => y(d.Stars))
    .attr("r",7)
    .style("opacity", .5)
    .style("fill", "#69b3a2")

    //add labels
    dots.selectAll("text")
    .data(this.exampleData)
    .enter()
    .append("text")
    .text((d:any) => d.Framework)
    .attr("x", (d:any) => x(d.Released))
    .attr("y", (d:any) => y(d.Stars))
  }

}
