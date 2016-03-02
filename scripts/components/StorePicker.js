import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

class StorePicker extends React.Component {

  @autobind
  goToStore(event){
    event.preventDefault();
    var storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);
  }

  render(){
    var storeType = "Store";

    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A {storeType}</h2>
        <input type="text" ref="storeId" required defaultValue={h.getFunName()} />
        <input type="submit" />
      </form>
    )
  }
}

reactMixin.onClass(StorePicker, History);

export default StorePicker;
