import React from 'react';

class Form extends React.Component {

    

    render () {
        return (
            <div className="Form">
                <form onSubmit={(evt)=> this.props.handleSubmit(evt)}>
                    <input  value={this.props.inputValue}
                    onChange={(evt)=> this.props.handleChange(evt)}
                    />
                </form>

            </div>
        );
    }
}

export default Form;