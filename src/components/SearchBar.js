import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  transition: box-shadow 0.2s linear;

  &:hover,
  &:focus {
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.75);
  }
`;

const Button = styled.button`
  display: inline-block;
  width: 5.6rem;
  height: 5rem;
  border: 0;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d5d7db;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    opacity: 1;
    background-color: #bbc0c9;
  }

  &:active {
    opacity: 0.8;
  }
`;

const Label = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 5rem;
  font-size: 2rem;
  background-color: snow;
  border: none;
  outline: none;
  padding-left: 1.4rem;
  padding-right: 1rem;

  &::placeholder {
    font-size: 2rem;
  }
`;

class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  handleInput = ({ target: { value } }) => {
    this.setState({
      inputValue: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.props.handleSearchFormSubmit(inputValue);

    this.setState({
      inputValue: '',
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={inputValue}
            onChange={this.handleInput}
            placeholder="Search images and photos"
            autocomplete="off"
            autoFocus
            required
            name="searchInput"
          ></Input>
          <Button type="submit">
            <Label> Search </Label>
          </Button>
        </SearchForm>
      </Header>
    );
  }
}

export default SearchBar;
