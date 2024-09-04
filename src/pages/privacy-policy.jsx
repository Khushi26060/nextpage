import React from "react";
import SEO from "../common/seo";
import Career from "../components/career";
import Wrapper from "../layout/wrapper";
import PrivacyArea from "../components/privacy";


const index = () => {
   return (
      <Wrapper>
         <SEO pageTitle={"CodeCafeLab - It solutions"} />
         < PrivacyArea/>
      </Wrapper>
   );
};

export default index;
