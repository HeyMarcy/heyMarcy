import React from 'react';

import WorkContent from './WorkContent';
import './data';

import { StyleSheet, css } from 'aphrodite';
import styles from '../css/index.js';


class Work extends React.PureComponent {

  // onItemClick = (item) => {
  //   this.props.push('/item');
  // }

  render() {
    return (
      <WorkContent
        className={css(styles.container)}
        onItemClick={this.onItemClick}
      />
    );
  }
}


// const mapDispatchToProps = {
//   push,
// }

// export default connect (null, mapDispatchToProps)(Work);
export default Work;
