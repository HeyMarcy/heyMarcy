import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ItemDetails from './ItemDetails';
import fakeItem from './fakeItem'

const Wrapper = styled.div`
  display: flex;
  `;

class WorkSample extends Component {
  render() {
    return (
      <ItemDetails
        item={ fakeItem }
    />
    )
  }
}

export default WorkSample;
