import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';





class Search extends Component {
   state = {
       searchText: '',
       amount: 15,
       apiUrl: 'https://pixabay.com/api/',
       apiKey: '15626853-8a5f76649929174796a17f41d',
       images: []
   }

   onTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
   }

    render() {
        return (
            <div>
                <TextField 
                name="searchText"
                value={this.state.searchText}
                onChange={this.onTextChange}
                floatingLabelText= " Search For Images"
                fullWidth= {true}
                />
                <br />
                <SelectField
                name="amount"
                floatingLabelText="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
                >
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
                </SelectField>
                <br />

            </div>
        )
    }
}

export default Search;
