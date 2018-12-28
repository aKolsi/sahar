import * as React from "react";
import "./Home.css";
import Header from "../../../../shared/components/Header/component/Header";
import { Link } from "react-router-dom";
import { connect, MapStateToProps } from "react-redux";
import { IState } from "src/shared/store";
type Props = TStateProps;
class Home extends React.Component<Props> {
  public render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header />
          <div className="row hero-part-row">
            <div className="overlay">
              <h1 className="my-title ">
                "Big dreams start<span> with smart ideas"</span>
              </h1>
              <div className="deadline text-focus-in">
                <h2>Application deadline</h2>
                <div className="timing">
                  <div>
                    <h3>0</h3>
                    <p>days</p>
                  </div>
                  <div>
                    <h3>0</h3>
                    <p>hours</p>
                  </div>
                  <div>
                    <h3>0</h3>
                    <p>minutes</p>
                  </div>
                  <div>
                    <h3>0</h3>
                    <p>secondes</p>
                  </div>
                </div>
                {!this.props.currentUser ? (
                  <Link to="/auth" className="application-btn">
                    <i className="fab fa-telegram-plane" />
                    apply now{" "}
                  </Link>
                ) : (
                  <Link to="/auth/appli" className="application-btn">
                    <i className="fab fa-telegram-plane" />
                    Start your Application
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="row my-second-part-row">
            <div className="col-sm-6 hh">
              <p className="ost-desc-title">WHAT IS OST ?</p>
              <p className="ost-desc-paragraph">
                It is a Start up Competition in partnership with Columbia
                Engineering and Business School to support Tunisian youth eager
                to open up to the world and thrive. It brings together students
                from different disciplines, across universities and regions and
                boosts their innovation and team work skills to solve global
                problems. Because we believe that together we can be change
                makers!
              </p>
            </div>
            <div className="col-sm-6 ost-desc-imag-container">
              <img src="students.svg" alt="" className="ost-desc-image" />
            </div>
          </div>
        </div>

        <footer className="container-fluid last-of-page">
          <div className="row">
            <div className="col-md-3">
              <img
                src="http://www.ost.com.tn/wp-content/uploads/ost-logo.png"
                alt=""
                className="footer logo"
              />
            </div>
            <div className="col-md-8 last-of-page-p">
              <h6>openstartuptunisia.competition@gmail.com | Newsletter </h6>

              <p>
                Copyright © 2017 OST | Concept : RRC | Conception & Réalisation
                : fullab
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
interface TStateProps {
  currentUser: any;
}
interface TOwnProps {}
const mapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  currentUser: state.auth.currentuser
});
export default connect(
  mapStateToProp,
  null
)(Home);
