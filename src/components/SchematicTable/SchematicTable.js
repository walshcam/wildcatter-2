//==================================================================================
// The Editable Schematic Table
//==================================================================================
import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';



const SchematicTable = (props) => (
    <div style = {{ height: `${props.height}`, width: `${props.width}` }}>
        <ReactTable
            rows 
            data = { props.data }
            columns = {[
                {
                    Header: "Depth",
                    columns: [
                        {
                            Header: "Min Depth",
                            accessor: "minDepth",
                            Cell: props.renderEditable
                        },
                        {
                            Header: "Max Depth",
                            accessor: "maxDepth",
                            Cell: props.renderEditable
                        }
                    ]    
                },
                {
                    Header: "Diameter",
                    columns: [
                        {
                            Header: "OD",
                            accessor: "od",
                            Cell: props.renderEditable
                        },
                        {
                            Header: "Weight",
                            accessor: "weight",
                            Cell: props.renderEditable
                        },
                        {
                            Header: "ID",
                            accessor: "id",
                            Cell: props.renderEditable
                        }
                    ]
                },
                {
                    Header: "Info",
                    columns: [
                        {
                            Header: "Description",
                            accessor: "description",
                            Cell: props.renderEditable
                        }
                    ]
                }
            ]}
            className = "-striped -highlight"
        />
    </div>
);

export default SchematicTable;