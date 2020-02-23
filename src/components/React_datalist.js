import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListCheck,
  DataListItemCells,
  DataListAction
} from '@patternfly/react-core';

class React_datalist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isDeleted: false };

    this.onToggle = isOpen => {
      this.setState({ isOpen });
    };

    this.onSelect = event => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };
  }

  render() {

    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.bird) {
      return <div>didn't get a bird</div>;
    }


    return (
      <React.Fragment>
        <DataList aria-label="single action data list example ">
          {(
            <DataListItem aria-labelledby="single-action-item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="single-action-item1" >Species</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Date</DataListCell>,
                    <DataListCell key="tertiary content">Location</DataListCell>
                  ]}
                />
                <DataListAction
                  aria-labelledby="single-action-item1 single-action-action1"
                  id="single-action-action1"
                  aria-label="Actions"
                >
                </DataListAction>
              </DataListItemRow>
            </DataListItem>
          )}
          {!this.state.isDeleted1 && (
            <DataListItem aria-labelledby="single-action-item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="single-action-item1"><div>{this.state.bird.species}</div></span>
                    </DataListCell>,
                    <DataListCell key="secondary content"><div>{this.state.bird.date}</div></DataListCell>,
                    <DataListCell key="tertiary content"><div>{this.state.bird.location}</div></DataListCell>
                  ]}
                />
                <DataListAction
                  aria-labelledby="single-action-item1 single-action-action1"
                  id="single-action-action1"
                  aria-label="Actions"
                >
                </DataListAction>
              </DataListItemRow>
            </DataListItem>
          )}
        </DataList>
      </React.Fragment>
    );
  }
}
export default React_datalist;
