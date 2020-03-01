import React from 'react';
import Task from './Task';

class List extends React.Component {

    render () {
        return (
        <div className="List">
            {this.props.todos.map((todo, index)=> {
                return(
                    <Task 
                    key={index}
                    index={index}
                    handleClick={this.props.handleClick} 
                    todo={todo}
                    />
                )
            })}
        </div>
        );
    }

}

export default List;