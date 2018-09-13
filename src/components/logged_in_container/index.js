import React, { Component } from 'react';
import { Input, Icon, Button } from 'semantic-ui-react';
import Papa from 'papaparse';
import { Redirect } from 'react-router-dom';
import { each, get } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPersonBatch, fetchPeople, logout } from '../../actions/index.js';
import Table from './table';

class LoggedInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleCSVUpload = this.handleCSVUpload.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const userId = get(this.props, 'currentUser._id');
    this.props.fetchPeople(userId);
  }

  handleLogout() {
    this.props.logout()
  }

  handleCSVUpload(event) {
    const that = this;
    const file = event.target.files[0];
    const fileName = file.name;
    let delimiter = ""
    let fileType = ""

    if (fileName === 'comma.txt') {
      delimiter = ',';
      fileType = 'comma';
    } else if (fileName === 'space.txt') {
      delimiter = ' ';
      fileType = 'space';
    } else if (fileName === 'pipe.txt') {
      delimiter = '|';
      fileType = 'pipe';
    }

    Papa.parse(event.target.files[0], {
      header: false,
      delimiter,
      complete(results) {
        that.handleCSVSave(results.data, fileType);
      },
    });
  }

  handleCSVSave(data, fileType) {
    const userId = get(this.props, 'currentUser._id');
    const assetInsertArray = [];
    const parsedCsv = data;
    if (fileType === 'comma') {
      each(parsedCsv, row => {
        const [lastName, firstName, pet, favoriteColor, dateOfBirth] = row;
        const newAsset = [
          lastName,
          firstName,
          pet,
          favoriteColor,
          dateOfBirth,
        ];
        assetInsertArray.push(newAsset);
      });
    } else if (fileType === 'space') {
      each(parsedCsv, row => {
        const [lastName, firstName, middleInitial, pet, dateOfBirth, favoriteColor] = row;
        const newAsset = [
          lastName,
          firstName,
          middleInitial,
          pet,
          dateOfBirth,
          favoriteColor,
        ];
        assetInsertArray.push(newAsset);
      });
    } else if (fileType === 'pipe') {
      each(parsedCsv, row => {
        const [lastName, firstName, middleInitial, pet, favoriteColor, dateOfBirth] = row;
        const newAsset = [
          lastName,
          firstName,
          middleInitial,
          pet,
          favoriteColor,
          dateOfBirth,
        ];
        assetInsertArray.push(newAsset);
      });
    }
    this.props.createPersonBatch(assetInsertArray, fileType, userId)
  }

  render() {
    const userId = get(this.props, 'currentUser._id');
    if (userId) {
      return (
        <div>
          <h4>Bulk Upload Sponsors</h4>
          <Input type="file" id="uploadCSV" accept="text/csv, .txt" onChange={this.handleCSVUpload} style={{ display: 'none' }}/>
          <label htmlFor="uploadCSV" className="ui red right basic button">
            <Icon name="upload"/>
            Upload
          </label>
          <Button
            onClick={this.handleLogout}
            color='red'
            style={{ 'float': 'right' }}
          >
            Logout
          </Button>
          <Table data={this.props.people} />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createPersonBatch,
  fetchPeople,
  logout,
}, dispatch);

const mapStateToProps = ({ people, user }) => ({
  people: people.people,
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInContainer);
