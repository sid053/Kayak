import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from './nav';

import MultiSlider from "multi-slider";
class Flightlist extends Component {
    constructor(props){
        super(props);
        this.state = {
             test:[1,2,3,4,5,1,2,3,4,5],
             low: 0,
             high:0,
             valuesPrice:[],
             valuesArrivalTime:[],
             valuesDepartureTime:[]
        }
     }
      maxprice = 0; 
      minprice = 0;
      maxtime = 1440;
      mintime = 0

    getTime(minutes){

        var hour = Math.floor(minutes/60)
        var minute = minutes%60;
        return hour+":"+minute
    }  
    componentWillMount(){


        this.maxprice = 234; //get from api
        this.minprice = 67;
        var values = [0,this.maxprice-this.minprice,0]
        this.setState({
            valuesPrice: values,
            low:this.minprice,
            high:this.maxprice
          });
    }
    onChangePrice = values =>
    this.setState({
      valuesPrice: values,
      low :  this.minprice + values[0],
      high: this.maxprice - values[2]
    });
    onChangeDepartureTime = values =>
    this.setState({
      values: values,
      low :  this.minprice + values[0],
      high: this.maxprice - values[2]
    });
    onChangeArrival = values =>
    this.setState({
      values: values,
      low :  this.minprice + values[0],
      high: this.maxprice - values[2]
    });
    displaystopline(stop){
        if(stop=="nonstop"){
            return <span>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</span> 
        }
        else if(stop=="onestop"){
            return <span>&mdash;&mdash;&#9632;&mdash;&mdash;&mdash;</span> 
        }
        else{
            return <span>&mdash;&mdash;&#9632;&mdash;&mdash;&#9632;&mdash;&mdash;</span> 
        }
    }
    displayflights(){
        
            return(
                <div className="jumbotron">

                    <div className="row">
                        <div className="col-sm-9">
                            <div className="row" style={{paddingTop:"4vh"}}>
                                    <div className="col-sm-2" style={{textAlign:"center",fontSize:"12px",fontWeight:"bold"}}>
                                        11/24
                                    </div>
                                    <div className="col-sm-2" style={{textAlign:"center",fontSize:"12px",fontWeight:""}}>
                                    <div  style={{textAlign:"center"}}>
                                                <img src={require('../image/hotelbg.jpg')} height="25vh" width="25vw" alt="logo"/>
                                                <p>United</p>
                                       </div>
                                    </div>
                                    <div className="col-sm-2" style={{textAlign:"center",fontSize:"12px"}}>
                                       <div  style={{textAlign:"center"}}>
                                                <p style={{fontWeight:"bold"}}>3:59 pm</p>
                                                <p>SFO</p>
                                       </div>
                                    </div>
                                    <div className="col-sm-2" style={{textAlign:"center"}}>
                                    <div  style={{textAlign:"center"}}>
                                         {this.displaystopline("nonstop")}
                                         <p style={{fontSize:"12px"}}>non stop</p>
                                    </div>
                                    </div>
                                    <div className="col-sm-2" style={{textAlign:"center",fontSize:"12px"}}>
                                    <div  style={{textAlign:"center"}}>
                                             <p style={{fontWeight:"bold"}}>3:59 pm</p>
                                             <p>SFO</p>
                                    </div>
                                    </div>
                                    <div className="col-sm-2" style={{textAlign:"center"}}>
                                        <p style={{fontSize:"12px",fontWeight:"bold"}}>LXI09</p>
                                    </div>
                                    
                            </div>
                         </div>
                        <div className="col-sm-3">
                                <div style={{textAlign:"center"}}>
                                <b style={{fontSize:"20px",fontWeight:"bold"}}>$251</b><br/>
                                <b style={{fontSize:"12px",fontWeight:"bold"}}>Class</b><br/>
                                <button style={{width:"12vw"}}className="btn btn-deep-orange">Book</button>
                                </div>

                        </div>
                    </div>
    
                 </div> 
            )
     }
    render(){
        var colors = ["#FCBD7E", "#EB9F71", "#E6817C"];
        return(
            <div>
                <div style={{backgroundColor:'black'}}>
                <Nav/>
                </div>
                <div className="jumbotron">
                  {this.state.values}
                </div>    
                <div className="row">

                    <div className="col-4">
                        <div className="jumbotron">
                                <p style={{fontWeight:"bold"}}>Price</p>
                                <hr/>    
                                <MultiSlider
                                colors={colors}
                                values={this.state.valuesPrice}
                                onChange={this.onChangePrice}
                            />
                                    <div className="row">

                                        <div className="col-sm-6">
                                        Low:${this.state.low}
                                        </div>
                                        <div className="col-sm-6" style={{textAlign:'right'}}>
                                        High:${this.state.high}
                                        </div>
                                    </div>
                     
                        <br/>  <br/>
                      
                                    <p style={{fontWeight:"bold"}}>Departure Time</p>
                                    <hr/>    
                                    <MultiSlider
                                    colors={colors}
                                    values={this.state.valuesPrice}
                                    onChange={this.onChangePrice}
                                />
                                <div className="row">

                                        <div className="col-sm-6">
                                        Low:${this.getTime(1234)}
                                        </div>
                                        <div className="col-sm-6" style={{textAlign:'right'}}>
                                        High:${this.state.high}
                                        </div>
                                </div>

                         <br/>  <br/>
                      
                                    <p style={{fontWeight:"bold"}}>Arrival Time</p>
                                    <hr/>    
                                    <MultiSlider
                                    colors={colors}
                                    values={this.state.valuesPrice}
                                    onChange={this.onChangePrice}
                                />
                                <div className="row">

                                        <div className="col-sm-6">
                                        Low:${this.state.low}
                                        </div>
                                        <div className="col-sm-6" style={{textAlign:'right'}}>
                                        High:${this.state.high}
                                        </div>
                                </div>       
                     
                        </div>  

                        
                    </div>
                    <div className="col-8" style={{ overflow: 'scroll', height: '90vh'}}>
                         { this.state.test.map((this.displayflights),this)}     
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default withRouter(Flightlist);