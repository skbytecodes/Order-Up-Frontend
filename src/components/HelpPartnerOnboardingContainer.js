import React from "react";
import { useSelector } from "react-redux";
import HelpPartnerOnboarding from "./HelpPartnerOnboarding";
import LoginPage from "./LoginPage";

function HelpPartnerOnboardingContainer() {
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
            <HelpPartnerOnboarding />
          </div>
        </div>
      ) : (
        <div>
          <HelpPartnerOnboarding />
        </div>
      )}
    </div>
  );
}

export default HelpPartnerOnboardingContainer;
