import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      console.log(location.state);
      return (
        <div className="detail">
          <h3 className="datail__title">{location.state.title}</h3>
          <div className="datail__year">({location.state.year})</div>
          <div className="datail__poster">
          <img src={location.state.poster} alt={location.state.title} title={location.state.title} /></div>
          <div className="datail__name">
          Genres
          </div>
          <div className="datail__content">
          {location.state.genres.map((genre, index) => (
            <div key={index}>
              {genre}&nbsp;
            </div>
          ))}
          </div>
          <div className="datail__name">
          Summary
          </div>
          <div className="datail__content">
          {location.state.summary}
          </div>
      </div>
      )} else {
      return null;
    }
  }
}

export default Detail;
