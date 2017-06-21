import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
`;
const Image = styled.div`
  width:25%;
  height: 100px;
  background: url('${(props) => props.image}');
  background-size: cover;
  background-position: center;
`;

const Name = styled.h4`
`;

const Item = styled.div`
  width:50%;
  padding:24px;
`;


const ItemsGrid = ({ items, onItemClick }) => (
  <Wrapper>
    {items.map((item, index) => (
      <Item onClick= {() => onItemClick(item)} key={index}>
         <Image image={item.picture}/>
         <Name>{item.name}</Name>
      </Item>
    ))}
  </Wrapper>
);

ItemsGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  })).isRequired,
  onItemClick:PropTypes.func,
};

export default ItemsGrid;
