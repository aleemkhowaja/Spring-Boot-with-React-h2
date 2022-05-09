import React, { Component } from 'react';
import FacilityService from "../services/FacilityService";
import PackageService from "../services/PackageService";

class Package extends Component {

    constructor(props) {
        super(props);

        if (localStorage.getItem("id") == '' || localStorage.getItem("id") == undefined ||
            localStorage.getItem("loginBy") != 'neighbour') {
            window.location.href = '/'
        }


        this.state = {
            packages :  [],
        }
    }

    async fetchPackages() {
        console.log("fetchPackages")
        const res =  await PackageService.getPackages()
            .then((response) => {
                this.setState({packages: response.data})
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount(){
        this.fetchPackages()
    }


    render() {
      return (
          <div className='content'>
              <h2 style={{fontSize: '30px', color: '#757575', marginBottom: '15px'}}>Package reservations</h2>
              <table>
                <tr>
                    <th>Name</th>
                    <th>Date of Pick up</th>
                    <th>Notes</th>
                </tr>

                  <tbody>
                  {this.state.packages.length === 0 ?
                      <tr align="center">
                          <td colSpan="5">No Record Found</td>
                      </tr> :
                      this.state.packages.map(
                          (vote, index) => (
                              <tr>
                                  <td> {vote.title}</td>
                                  <td> {vote.reservationDate}</td>
                                  <td> {vote.description}</td>
                              </tr>
                          )
                      )
                  }
                  </tbody>
               </table>
          </div>
      );
    }
  }

export default Package;