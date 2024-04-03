import React, { Component } from 'react';

class AddRemoveEquipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentList: [],
      newEquipmentName: '',
    };
  }

  handleNameChange = (e) => {
    this.setState({ newEquipmentName: e.target.value });
  };

  handleAddEquipment = () => {
    if (this.state.newEquipmentName.trim() !== '') {
      const newEquipment = {
        id: Date.now(),
        name: this.state.newEquipmentName,
      };
      this.setState(prevState => ({
        equipmentList: [...prevState.equipmentList, newEquipment],
        newEquipmentName: '',
      }));
    }
  };

  handleRemoveEquipment = (id) => {
    this.setState(prevState => ({
      equipmentList: prevState.equipmentList.filter(item => item.id !== id),
    }));
  };

  render() {
    return (
      <div className="container mx-auto p-4">
        <div className="add-section my-4">
          <input
            type="text"
            placeholder="Equipment Name"
            value={this.state.newEquipmentName}
            onChange={this.handleNameChange}
            className="border p-2 mr-2"
          />
          <button
            onClick={this.handleAddEquipment}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={!this.state.newEquipmentName.trim()}
          >
            Add Equipment
          </button>
        </div>
        
        <div className="list-section">
          {this.state.equipmentList.map(item => (
            <div key={item.id} className="flex items-center justify-between my-2 p-2 shadow">
              <span>{item.name}</span>
              <button
                onClick={() => this.handleRemoveEquipment(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AddRemoveEquipment;
