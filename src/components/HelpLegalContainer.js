import React from "react";
import HelpLegal from "./HelpLegal";
import LoginPage from "./LoginPage";
import { useSelector } from "react-redux";

function HelpLegalContainer() {
  const showAuthPage = useSelector((state) => state.showAuthPage);
  return (
    <div>
      {showAuthPage ? (
        <div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.40)",
              zIndex: 10,
            }}
          ></div>
          <LoginPage isOpen={1} />
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <HelpLegal />
          </div>
        </div>
      ) : (
        <div>
          <HelpLegal />
        </div>
      )}
    </div>
  );
}

export default HelpLegalContainer;
