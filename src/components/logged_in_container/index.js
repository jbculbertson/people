import React, { Component } from 'react';
import { Input, Icon } from 'semantic-ui-react';
import Papa from 'papaparse';
import { each } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPersonBatch } from '../../actions/index.js';

class LoggedInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleCSVUpload = this.handleCSVUpload.bind(this);
  }

  handleCSVUpload(event) {
    const that = this;
    const file = event.target.files[0];
    const fileName = file.name;
    let type = ""

    if (fileName === 'comma.txt') {
      type = ',';
    } else if (fileName === 'space.txt') {
      type = ' ';
    } else if (fileName === 'pipe.txt') {
      type = '|';
    }

    Papa.parse(event.target.files[0], {
      header: false,
      delimiter: type,
      complete(results) {
        that.handleCSVSave(results.data, type);
      },
    });
  }

  handleCSVSave(data, type) {
    const assetInsertArray = [];
    const parsedCsv = data;
    if (type === ',') {
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
    } else if (type === ' ') {
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
    } else if (type === '|') {
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
    this.props.createPersonBatch(assetInsertArray)
  }

  render() {
    return (
      <div>
        <h4>Bulk Upload Sponsors</h4>
        <Input type="file" id="uploadCSV" accept="text/csv, .txt" onChange={this.handleCSVUpload} style={{ display: 'none' }}/>
        <label htmlFor="uploadCSV" className="ui red right basic button">
          <Icon name="upload"/>
          Upload
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createPersonBatch,
}, dispatch);

const mapStateToProps = ({ people }) => ({
  people,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInContainer);
