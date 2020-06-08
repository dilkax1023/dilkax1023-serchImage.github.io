import React from 'react';

class SearchBox extends React.Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form className='ui form' onSubmit={this.onFormSubmit}>
        <div className='field'>
          <label>Search</label>
          <input
            onChange={this.onInputChange}
            type='text'
            placeholder='Search here'
          />
        </div>
        <button
          className='ui button fluid large bottom margin computer'
          type='submit'
          // style={{ marginButtom: '20px' }}
        >
          Submit
        </button>
      </form>
    );
  }
}
export default SearchBox;
