//==================================================================================
// Imported Packages For The Schematic Page
//==================================================================================
import React, { Component } from 'react';
// Import UI Elements
import SchematicTable from './../../components/SchematicTable/SchematicTable';

class Schematic extends Component {
    render () {
        return (
            <div>
                <SchematicTable />
            </div>
        )
    }
}

export default Schematic;