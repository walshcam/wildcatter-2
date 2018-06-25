//==================================================================================
// The Editable Schematic Table
//==================================================================================
import React, { Fragment } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const SchematicTable = (props) => (
    <Fragment>
        <ReactTable 
            data = { props.data }
            columns = {[
                {
                    Header: "Depth",
                    columns: [
                        {
                            Header: "Min Depth",
                            accessor: "minDepth"
                        },
                        {
                            Header: "Max Depth",
                            accessor: "maxDepth"
                        }
                    ]    
                },
                {
                    Header: "Diameter",
                    columns: [
                        {
                            Header: "OD",
                            accessor: "od"
                        },
                        {
                            Header: "Weight",
                            accessor: "weight"
                        },
                        {
                            Header: "ID",
                            accessor: "id"
                        }
                    ]
                },
                {
                    Header: "Info",
                    columns: [
                        {
                            Header: "Description",
                            accessor: "description"
                        }
                    ]
                }
            ]}
            className = "-striped -highlight"
        />
    </Fragment>
);

export default SchematicTable;