import Spinner from "react-bootstrap/Spinner";
import "./Loading.scss";


// props.error determines if loading should stop and display error msg
// props.msg is the actual message displayed while the loading spinner spins
export default function Loading(props) {
  return (
    <div className="container" id="container">
      <div style={{ textAlign: "center", height: "50px" }}>
        {!props.error && (
          <div>
            <Spinner
              style={{ width: "5em", height: "5em" }}
              animation="border"
              variant="warning"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
        {props.msg && <div style={{ color: "white" }}>{props.msg}</div>}
        {props.error && (
          <div style={{ color: "white" }}>
            {props.error}
            <div>
              <a href="#" onClick={() => props.setState("ladder")}>
                Back
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
