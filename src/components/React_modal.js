import React from 'react';
import brandImg from '../favbook.png';
import { AboutModal, Button } from '@patternfly/react-core';

class React_modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Maps
        </Button>
        <AboutModal
          width={'50%'}
          isOpen={isModalOpen}
          backgroundImageSrc={brandImg}
          onClose={this.handleModalToggle}
          actions={[
            <Button key="confirm" variant="primary" onClick={this.handleModalToggle}>
              Confirm
            </Button>,
            <Button key="cancel" variant="link" onClick={this.handleModalToggle}>
              Cancel
            </Button>
          ]}
          isFooterLeftAligned
        >
        </AboutModal>
      </React.Fragment>
    );
  }
}
export default React_modal;
