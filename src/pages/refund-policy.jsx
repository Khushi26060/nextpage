import React from "react";
import SEO from "../common/seo";
import Career from "../components/career";
import Wrapper from "../layout/wrapper";
import RefundArea from "../components/refund";


const index = () => {
   return (
      <Wrapper>
         <SEO pageTitle={"CodeCafeLab - It solutions"} />
         <RefundArea />
      </Wrapper>
   );
};

export default index;
