/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Community extends Component {
    render() {
        return (
            <div className='content'>
            <div className='row'>
                <div className='col-md-4 '>
                    <div>
                        <h2 style={{fontSize: '30px', color: '#757575', marginBottom: '35px'}}>Community forum</h2>
                    </div>
                    <table style={{width: '250px'}}>
                        <tr style={{ backgroundColor: 'white'}}>
                            <td><a href='#'>Alfreds Futterkiste</a></td>
                        </tr>
                        <tr>
                            <td><a href='#'>fsdf</a></td>
                        </tr>
                        <tr>
                            <td><a href='#'>sd</a></td>
                        </tr>
                        <tr>
                            <td><a href='#'>fsd</a></td>
                        </tr>
                        <tr>
                            <td><a href='#'>sdfsd</a></td>
                        </tr>
                        <tr>
                            <td><a href='#'>sdfsdf</a></td>
                        </tr>
                    </table>
                </div>
                <div className='col-md-8'>
                    <div className='chat-box row' style={{marginLeft: '0px', marginRight: '0px'}}>
                        <div className='col-md-9 records'>
                            <p>5:6 aaa has just entered this chat</p>
                            <div className='record'>
                                <h2><a href='#'>fsdf</a></h2>
                                <p>Hello world</p>
                            </div>
                            <div className='record'>
                                <h2><a href='#'>fsdf</a></h2>
                                <p>Hello Alex</p>
                            </div>
                            <div className='record'>
                                <h2><a href='#'>fsdf</a></h2>
                                <p>Hello Alex</p>
                            </div>
                            <div className='record'>
                                <h2><a href='#'>fsdf</a></h2>
                                <p>Hello Alex</p>
                            </div>
                            <div className='record'>
                                <h2><a href='#'>fsdf</a></h2>
                                <p>Hello Alex</p>
                            </div>
                            <div className='record'>
                                <h2><a href='#'>fsdf</a></h2>
                                <p>Hello Alex</p>
                            </div>
                        </div>
                        <div className='col-md-3 users'>
                            <div className='user row'>
                                <div className='col-md-3'> 
                                    <img src='' alt='user avatar'></img>
                                </div>
                                <div className='col-md-9'>
                                    <p>AAA</p>
                                </div>
                            </div>
                            <div className='user row'>
                                <div className='col-md-3'> 
                                    <img src='' alt='user avatar'></img>
                                </div>
                                <div className='col-md-9'>
                                    <p>AAA</p>
                                </div>
                            </div><div className='user row'>
                                <div className='col-md-3'> 
                                    <img src='' alt='user avatar'></img>
                                </div>
                                <div className='col-md-9'>
                                    <p>AAA</p>
                                </div>
                            </div>
                            <div className='user row'>
                                <div className='col-md-3'> 
                                    <img src='' alt='user avatar'></img>
                                </div>
                                <div className='col-md-9'>
                                    <p>AAA</p>
                                </div>
                            </div>
                            <div className='user row'>
                                <div className='col-md-3'> 
                                    <img src='' alt='user avatar'></img>
                                </div>
                                <div className='col-md-9'>
                                    <p>AAA</p>
                                </div>
                            </div>
                            <div className='user row'>
                                <div className='col-md-3'> 
                                    <img src='' alt='user avatar'></img>
                                </div>
                                <div className='col-md-9'>
                                    <p>ccc</p>
                                </div>
                            </div>
                            <div className='user row'>
                                <div className='col-md-3'> 
                                    <img src='' alt='user avatar'></img>
                                </div>
                                <div className='col-md-9'>
                                    <p>ddd</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chat-input'>
                        <div className='row'>
                            <input type="text" class="form-control cinput col-md-3" id="usr"/>
                            <input type='button' value="Send" className='cbutton col-md-2' style={{width: '70px', height: '36px'}}></input>
                            <input type='button' value="Themes" className='cbutton col-md-2' style={{marginLeft: '2px', width: '70px', height: '36px'}}></input>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
      }
}

export default Community;