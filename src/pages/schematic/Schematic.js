//==================================================================================
// Imported Packages For The Schematic Page
//==================================================================================
import React, { Component } from 'react';
// Import UI Elements
import SchematicTable from './../../components/SchematicTable/SchematicTable';
import Input from './../../components/Input/Input';

class Schematic extends Component {

    state = {
        // Table Data
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
        }],
        // Form Data
        wellboreForm: {
            minDepth: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Min Depth (ft)'
                },
                value:''
            },
            maxDepth: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Max Depth (ft)'
                },
                value:''
            },
            od: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'OD (in)'
                },
                value:''
            },
            weight: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Weight (lb)'
                },
                value:''
            },
            id: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'ID (in)'
                },
                value:''
            },
            description: {
                elementType: 'textbox',
                elementConfig: {
                    type: 'text',
                    placeholder: 'OD'
                },
                value:''
            },
        }
    }

//==================================================================================
// React Table Methods
//==================================================================================

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

//==================================================================================
// Form Methods
//==================================================================================

    formHandler = (event) => {
        event.preventDefault();
        //add new data to the state
        let data = [...this.state.data];
        console.log(data);
        const newData = {
            minDepth: this.state.wellboreForm.minDepth.value,
            maxDepth: this.state.wellboreForm.maxDepth.value,
            od: this.state.wellboreForm.od.value,
            weight: this.state.wellboreForm.weight.value,
            id: this.state.wellboreForm.id.value,
            description: this.state.wellboreForm.description.value
        };
        data = data.push(newData);
        console.log(data);
        this.setState({
            data: data
        })
        //clear out field
        let wellboreForm = {...this.state.wellboreForm}
        for (let formElementIdentifier in wellboreForm) {
            wellboreForm[formElementIdentifier].value = '';
        }

        this.setState( {
            wellboreForm: wellboreForm
        })
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedWellboreForm = {...this.state.wellboreForm};
        const updatedFormElement = {...updatedWellboreForm[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        updatedWellboreForm[inputIdentifier] = updatedFormElement;
        this.setState({
            wellboreForm: updatedWellboreForm
        })
    }

//==================================================================================
// Render Function
//==================================================================================
    render () {

        // Form Element For Wellbore Schematic Table
        // =========================================================================
        const wellboreFormArray = [];
        for (let key in this.state.wellboreForm) {
            wellboreFormArray.push({
                id: key,
                config: this.state.wellboreForm[key]
            });
        }

        let wellboreTableForm = (
            <form onSubmit = {this.formHandler}>
                {wellboreFormArray.map(formElement => (
                    <Input 
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        changed = {(event) => this.inputChangeHandler(event, formElement.id)}
                    />
                ))}
                <button>BUTTON</button>
            </form>
        )

        // Rendered Page
        // =========================================================================
        return (
            <div style = {{display: 'flex'}}>
                <div>
                    <SchematicTable 
                        renderEditable = { this.renderEditable }
                        data = { this.state.data }
                    />
                </div>
                <div>
                    {wellboreTableForm}
                </div>
            </div>
        );
    }
}

export default Schematic;