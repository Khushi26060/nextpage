import FooterFive from "@/layout/footers/footer-5";
import HeaderThree from "@/layout/headers/header-3";
import React from "react";
import TestimonialArea from "../home/testimonial-area";
import BlogArea from "../home/blog-area";
import HeroArea from "../home/hero-area";
import IntegrationArea from "../home/integration-area";
import FeatureArea from "../home/feature-area";
import ProjectArea from "../home/project-area";
import ServicesArea from "../home/services-area";
import CtaArea from "../../contact/cta-area";


const HomeOne = ({data}) => {
	return (
		<>
			<HeaderThree data={data}  />
			<HeroArea />
			<FeatureArea />
			<ProjectArea />
			<IntegrationArea />
			<ServicesArea />
			<TestimonialArea />
			<BlogArea />
			<CtaArea />
			<FooterFive  data={data} style_contact={true} style_team={true} />

		</>
	);
};

export default HomeOne;
