import React, { Component } from 'react';
import ReactTable from 'react-table';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    console.log(this.props);
    const { data } = this.props;
    const columns = [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Middle Initial',
        accessor: 'middleInitial',
      },
      {
        Header: 'Pet',
        accessor: 'pet',
      },
      {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
      },
      {
        Header: 'Favorite Color',
        accessor: 'favoriteColor',
      },
    ];
    return (
      <ReactTable
        data={data}
        columns={columns}
        className="-highlight"
        showPagination={false}
        sortable={true}
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
