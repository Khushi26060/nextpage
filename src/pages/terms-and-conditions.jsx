import React from "react";
import SEO from "../common/seo";
import Career from "../components/career";
import Wrapper from "../layout/wrapper";
import TermsArea from "../components/terms";


const index = () => {
   return (
      <Wrapper>
         <SEO pageTitle={"CodeCafeLab - It solutions"} />
         <TermsArea />
      </Wrapper>
   );
};

export default index;
