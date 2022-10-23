import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        <Flip left duration={2000}>
          <div
            className="card-img"
            style={{
              border: `1px solid ${theme.shadow}`,
              boxShadow: `5px 5px 5px ${theme.shadow}`,
            }}
          >
            <img
              style={{
                maxWidth: `100%`,
                maxHeight: `100%`,
                transform: `scale(50%, 50%)`,
              }}
              src={require(`../../assests/images/${degree.logo_path}`)}
              alt={degree.alt_name}
            />
          </div>
        </Flip>
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{
              borderBottom: `1px solid ${theme.shadow}`,
              borderLeft: `1px solid ${theme.shadow}`,
              borderRight: `1px solid ${theme.shadow}`,
              borderRadius: `7px`,
              width: `90%`,
              margin: `10px`,
              marginLeft: `20px`,
              boxShadow: `5px 5px 5px 5px ${theme.shadow}`,
            }}
          >
            <div className="body-header">
              <div className="body-header-title">
                <h3
                  className="card-title"
                  style={{ color: theme.text, "font-weight": "normal" }}
                >
                  {degree.title}
                </h3>
                <h4
                  className="card-subtitle"
                  style={{ color: theme.text, "font-weight": "normal" }}
                >
                  {degree.subtitle}
                </h4>
              </div>
              <div className="body-header-duration">
                <h3
                  className="duration ml-auto"
                  style={{ color: theme.text, "font-weight": "normal" }}
                >
                  {degree.duration}
                </h3>
                <h3
                  className="cgpa ml-auto"
                  style={{ color: theme.text, "font-weight": "normal" }}
                >
                  CGPA {degree.cgpa}
                </h3>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
