import React from 'react';
import ClientsList from './clients-list';


export default class FilterClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    onChange(e) {
         this.setState({
             input: e.target.value
         })
    }

    render() {
        const component = this;
        const clientFilter = this.props.user.clients.filter((client) => {
           if (client.name.slice(0, component.state.input.length).toLowerCase() === component.state.input.toLowerCase()) {
            return client;
           }
        })
        return (
            <div className="filter">
                <form
                    className="filter-clients__form"
                    // onSubmit={(e) => {
                    //     e.preventDefault();
                    //     const inputValue = e.target.filter.value;
                    //     this.onSubmit(inputValue);
                    //     e.target.filter.value ='';
                    // }}
                    >
                    <label className="filter-clients__label" htmlFor="filter"></label>
                    <input
                        type="text"
                        name="filter"
                        id="filter"
                        placeholder="Filter by name"
                        onChange={(e) => {
                            this.onChange(e)
                        }}
                    />
                    {/*                     
                    <button className="filter-button filter-clients__button"
                        disabled={this.props.pristine || this.props.submitting}>
                        Search
                    </button> */}
                </form>
                <ClientsList user={this.props.user} filteredList={clientFilter}/>
            </div>
        );
        } 
    }


