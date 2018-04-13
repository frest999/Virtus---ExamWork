import React from "react";
import "./Search.css";

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchBtn: false
    };
  }

  searchBtn = () => {
    this.setState({
      searchBtn: !this.state.searchBtn
    })
  };

  searchSubmit = (el) => {
    el.preventDefault()
  }

  render(){
    return(
      <form className="SearchForm" onSubmit={this.searchSubmit} >
        <div className="search-wrap" style={this.state.searchBtn ? {width:'auto'} : {width: 0}}>
           <input
               className="search-text-field"
               style={this.state.searchBtn ? {width:'auto'} : {width: 0,border:'none',padding:0}}
               type="text"
               placeholder="Search"
           />
        </div>
           <button className={this.state.searchBtn ? "SearchBtnClose" : "SearchBtn"} onClick={this.searchBtn}/>
       </form>
    )
  }
}

export default Search;