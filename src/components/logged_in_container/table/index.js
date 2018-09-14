import React, { Component } from 'react';
import ReactTable from 'react-table';
import moment from 'moment';
import { get } from 'lodash';
import { Image, List } from 'semantic-ui-react';

import DogImage from '../../../assets/dog.png';
import CatImage from '../../../assets/cat.png';
import BothImage from '../../../assets/both.png';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    const data = get(this.props, 'data', []);
    const columns = [
      {
        Header: 'First name',
        accessor: 'firstName',
      },
      {
        Header: 'Last name',
        accessor: 'lastName',
      },
      {
        Header: 'Middle Initial',
        accessor: 'middleInitial',
      },
      {
        Header: 'Pet',
        accessor: 'pet',
        Cell: val => {
          if (val && val.value) {
            const { value } = val
            if (value === 'Dog' || value === 'D') {
              return (
                <List>
                  <List.Item>
                  <Image avatar src={DogImage} />
                    <List.Content>
                      Dog
                    </List.Content>
                  </List.Item>
                </List>
              );
            } else if (value === 'Cat' || value === 'C') {
              return (
                <List>
                  <List.Item>
                  <Image avatar src={CatImage} />
                    <List.Content>
                      Cat
                    </List.Content>
                  </List.Item>
                </List>
              );
            } else if (value === 'Both' || value === 'B'){
              return (
                <List>
                  <List.Item>
                  <Image avatar src={BothImage} />
                    <List.Content>
                      Both
                    </List.Content>
                  </List.Item>
                </List>
              );
            } else {
              return 'None';
            }
          }
        },
      },
      {
        Header: 'Birthday',
        accessor: 'dateOfBirth',
        Cell: val => {
          return moment(val.value).format('M/D/YYYY');
        },
      },
      {
        Header: 'Favorite color',
        accessor: 'favoriteColor',
      },
    ];
    return (
      <ReactTable
        data={data}
        columns={columns}
        className="-highlight"
        showPagination={false}
        pageSize={data.length}
        sortable={true}
        headerStyle={{ color: 'grey' }}
        defaultSorted={[
        {
          id: 'firstName',
          desc: true,
        },
      ]}
      />
    );
  }
}

export default Table;
