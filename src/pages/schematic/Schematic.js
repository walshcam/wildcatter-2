//==================================================================================
// Imported Packages For The Schematic Page
//==================================================================================
import React, { Component } from 'react';
// Import UI Elements
import SchematicTable from './../../components/SchematicTable/SchematicTable';

class Schematic extends Component {

    state = {
        data: [{
            minDepth: 23,
            maxDepth: 1309,
            od: 2,
            weight: 6.124,
            id: 1,
            description: "this is a description"
        },{
            minDepth: 435,
            maxDepth: 2309,
            od: 2.125,
            weight: 6,
            id: 1.125,
            description: "this is also a description"
        }]
    }

    renderEditable = cellInfo => {
        return (
            <div
                style = {{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur = { event => {
                    const data = [...this.state.data];
                    data[cellInfo.index][cellInfo.column.id] = event.target.innerHTML;
                    this.setState({ data });
                }}
                dangerouslySetInnerHTML = {{
                    __html: this.state.data[cellInfo.index][cellInfo.column.id]
                }}
            />
        )
    }

    render () {
        return (
            <div>
                <SchematicTable 
                    renderEditable = { this.renderEditable }
                    data = { this.state.data }
                />
            </div>
        )
    }
}

export default Schematic;