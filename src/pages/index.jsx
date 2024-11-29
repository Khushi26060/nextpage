// pages/index.js or your corresponding file
// import { fetchBusinessDetails } from '../..//';
import SEO from '../common/seo';
import HomeOne from '../components/homes/home';
import Wrapper from '../layout/wrapper';


const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getStaticProps() {
  try {
    const res = await fetch(`${baseUrl}/business-detail`);
    const data = await res.json();
   
    return {
      props: { data },
      revalidate: 60, // Optional: Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching business details:', error);
    return {
      notFound: true, // Optional: Show 404 page if there's an error
    };
  }
}

const Home = ({ data }) => {
  return (
    <Wrapper>
      <SEO pageTitle={"CodeCafeLab - IT Solutions"} />
      <HomeOne data={data} />
    </Wrapper>
  );
};

export default Home;

