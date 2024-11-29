import React from "react";
import SEO from "../common/seo";
import Login from "../components/login"; // Import the Login component
import Wrapper from "../layout/wrapper";




const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <Login />
    </Wrapper>
  );
};

export default index;
