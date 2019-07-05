import React from "react";

import './select.css';
import Options from "./Options/Options";

class Select extends React.Component {
    state = {
        options: [
            { data_value: 1, content: 'Programming' },
            { data_value: 2, content: 'Graphic & Web Design' },
            { data_value: 3, content: 'System Administration' },
            { data_value: 4, content: '3D Modelling & Visualization' },
            { data_value: 5, content: 'System Administration' },

        ],
        selectOption: { data_value: 0, content: 'Tedris proqramini sech' },
        showOptions: false
    }
    selectClickHandler = () => {
        this.setState(prevState => ({
            showOptions: !prevState.showOptions
        }))
    }
    contentChangeHandler = (dataValue) => {
        const option = { ...this.state.options.find(option => { return option.data_value === dataValue }) };
        this.setState({
            selectOption: option,
            showOptions: false
        })
    }
    render() {
        let options = null;
        let optionsStyle = null;
        if (this.state.showOptions) {
            options = (this.state.options.map(option =>
                <Options className='option' clicked={() => this.contentChangeHandler(option.data_value)} key={option.data_value} option={option} />
            ))
            optionsStyle = {
                height: '200px'
            }
        }
        return (
            <div className="programs">
                <div className="select" onClick={this.selectClickHandler} data-value={this.state.selectOption.da}>{this.state.selectOption.content}</div>
                <ul className="options" style={optionsStyle}>
                    {options}

                </ul>
            </div>
        );
    }
}

export default Select;