import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: ({props.info})</p>
  </div>
);
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
          {props.isAdmin && <p>This is private info</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const withAuthWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>please login to see the info</p>)}

        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="these are the info" />,document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="facebook password: Briliant8" />,document.getElementById("app"));
