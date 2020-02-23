import React from 'react';
import { TextInput } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon } from '@patternfly/react-icons';
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
    this.state = { isOpen: false, isDeleted: false, speciesValue: '', dateValue: '', locationValue: ''};

    this.handlespeciesTextInputChange = speciesValue => {
      this.setState({ speciesValue });
    };

    this.handledateTextInputChange = dateValue => {
      this.setState({ dateValue });
    };

    this.handlelocationTextInputChange = locationValue => {
      this.setState({ locationValue });
    };



    this.onToggle = isOpen => {
      this.setState({ isOpen });
    };

    this.handleClick = event => {
      this.state.speciesValue = '';
      this.state.dateValue = '';
      this.state.locationValue = '';
    }

    this.onSelect = event => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };
  }


  render() {

    const { speciesValue } = this.state;
    const { dateValue } = this.state;
    const { locationValue } = this.state;

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
                      <span id="single-action-item1">
                        <TextInput speciesValue={speciesValue} type="text" onChange={this.handlespeciesTextInputChange} aria-label="text input example" />
                      </span>
                    </DataListCell>,
                    <DataListCell key="secondary content">
                      <TextInput speciesValue={speciesValue} type="text" onChange={this.handledateTextInputChange} aria-label="text input example" />
                    </DataListCell>,
                    <DataListCell key="tertiary content">
                    <TextInput speciesValue={speciesValue} type="text" onChange={this.handlelocationTextInputChange} aria-label="text input example" />
                    </DataListCell>
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
          <Button
                    onClick={() => {
                      
                    }}
                    variant="primary"
                    key="delete-action"
                  >
                    Submit
                  </Button>
        </DataList>
      </React.Fragment>
    );
  }
}
export default React_datalist;
