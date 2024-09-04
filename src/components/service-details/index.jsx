import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/common/testimonial-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import ServiceDetailsArea from "./service-details-area";
import Testenomial from "../homes/home/services-area"

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const ServiceDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchServiceDetails = async () => {
        try {
          const response = await axios.get(`${baseUrl}/services/${id}`);
          setServiceData(response.data);
        } catch (error) {
          console.error('Error fetching service details:', error);
        }
      };

      fetchServiceDetails();
    }
  }, [id]);

  return (
    <>

      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo name={serviceData?.name || "Loading..."} innertitle={serviceData?.title || "Loading..."} />
            {serviceData ? (
              <ServiceDetailsArea serviceData={serviceData} />
            ) : (
              " "
            )}
            <Testenomial />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
