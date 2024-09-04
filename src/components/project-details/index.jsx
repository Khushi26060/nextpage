import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import ThumbArea from "./thumb-area";
import Testenomial from "../homes/home/project-area";
import ProjectDetailsArea from "./project-details-area";


const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [projectData, setProjectData] = useState(null);

  console.log("projectid==>", id)
  useEffect(() => {
    if (id) {
      const fetchProjectData = async () => {
        try {
          const response = await axios.get(`${baseUrl}/projects/${id}`);
          setProjectData(response.data);
        } catch (error) {
          console.error('Error fetching project data:', error);
        }
      };
      fetchProjectData();
    }
  }, [id]);

  if (!projectData) {
    return <p>Loading project details...</p>;
  }

  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbEight /> 
            {/* <ThumbArea projectData={projectData} /> */}
            <ProjectDetailsArea projectData={projectData} />
            <Testenomial />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
