import React from "react";
import "../styles/Error.css"

function Error() {
    const goBack = () => {
        window.location.href = "/"
    }
  return (
    <section class="centered">
      <h1 className="msg">500 Server Error</h1>
      <h6>Hmm...It appears that server crashed. Apologies!</h6>
      <p className="back_btn" onClick={goBack}>Go Back</p>
    </section>
  );
}

export default Error;
