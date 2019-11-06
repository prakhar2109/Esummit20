import React, { Component } from "react";
import "./css/tabSwitcher.css";

class TabSwitcher extends Component {
  state = {
    selectedTab: 0,
  };

  changeTab = (e, tab) => {
    const { onChange } = this.props;
    const { selectedTab } = this.state;
    e.preventDefault();
    if (tab !== selectedTab) {
      onChange(tab);
      this.setState({ selectedTab: tab });
    }
  };
  render() {
    return (
      <div className="tab">
        <button className="tablinks" onClick={e => this.changeTab(e, 1)}>
          London
        </button>
        <button className="tablinks" onClick={e => this.changeTab(e, 2)}>
          Paris
        </button>
        <button className="tablinks" onClick={e => this.changeTab(e, 3)}>
          Tokyo
        </button>
      </div>
    );
  }
}

export default TabSwitcher;
