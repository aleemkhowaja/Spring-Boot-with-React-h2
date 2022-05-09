import React, { Component } from 'react';

class Pagestate extends Component {

    render() {
        return (
            <div className="content container-fluid h-100">
                <div className='row' style={{border:"solid", height:200, background: "skyblue"}}>
                    <h2 align="center" style={{marginLeft: '12px', marginTop: '7px', }} >TuComunidad</h2>
                    <div className='col-md-4'> </div>
                </div>
                <div className='row' style={{height:30}}> </div>
                <div className='row' style={{height:40, background: "whitesmoke"}}>
                    <h5 align="center" style={{marginLeft: '12px', marginTop: '7px', }} >Our Project</h5>
                    <div className='col-md-4'> </div>
                </div>
                <div className='row' style={{height:20}}> </div>
                <div className='row' style={{height:40}}>
                    <div className='col-md-4' >
                        <div className='cellboard' style={{height:100}}>
                            <h3 align="center">Management </h3>
                            <p>Control of Internal Procedures that affect neighboring communities </p>
                        </div>
                    </div>
                    <div className='col-md-4' >
                        <div className='cellboard' style={{height:100}}>
                            <h3 align="center">Simplicity </h3>
                            <p>Our Page is simple and intuitive for anyone </p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='cellboard' style={{height:100}}>
                            <h3 align="center">Max Match </h3>
                            <p>Take advantage of all the functional present community</p>
                        </div>
                    </div>
                </div>

            </div>
                )}
}

export default Pagestate;