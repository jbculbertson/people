import React, { Component } from 'react';
import { Input, Icon } from 'semantic-ui-react';
import Papa from 'papaparse';

import { each } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPersonBatch, fetchPeople } from '../../actions/index.js';
import Table from './table';

class LoggedInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleCSVUpload = this.handleCSVUpload.bind(this);
  }

  componentDidMount() {
    this.props.fetchPeople();
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
    this.props.createPersonBatch(assetInsertArray, fileType)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h4>Bulk Upload Sponsors</h4>
        <Input type="file" id="uploadCSV" accept="text/csv, .txt" onChange={this.handleCSVUpload} style={{ display: 'none' }}/>
        <label htmlFor="uploadCSV" className="ui red right basic button">
          <Icon name="upload"/>
          Upload
        </label>{}
        <Table data={this.props.people} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createPersonBatch,
  fetchPeople,
}, dispatch);

const mapStateToProps = ({ people }) => ({
  people: people.people,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInContainer);
