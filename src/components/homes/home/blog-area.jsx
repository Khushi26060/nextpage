import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogArea = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/blogs`);
      setBlogData(response.data?.blogs);
      console.log(response.data.blogs,"blog data") // Assuming the response is an array of blog objects
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blog articles.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  if (loading) {
    return (
      <div className="tp-blog-area pb-80">
        <div className="container text-center">
          <h3>Loading...</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="tp-blog-area pb-80">
        <div className="container text-center">
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!blogData.length) {
    return (
      <div className="tp-blog-area pb-80">
        <div className="container text-center">
          <h3>No articles available at the moment.</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="tp-blog-area pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <div className="tp-blog-section-box text-center mb-50">
              <h3 className="tp-section-title-3">
                Our Latest <span>News and Articles</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Show only the first 3 blogs */}
          {blogData.slice(0, 3).map((item) => {
            const imgUrl = item.image ? `${baseUrl}${item.image}` : '/images/default-image.jpg';
            // const authorImgUrl = item.author_image ? `${baseUrl}${item.author_image}` : '/images/default-author.jpg';

            return (
              <div key={item._id} className="col-xl-4 col-lg-4 col-md-6 mb-60">
                <div className="tp-blog-item">
                  <div className="tp-blog-thumb fix">
                    <Link href={`/blog-details/${item._id}`} passHref>
                      <Image src={imgUrl} alt={item.title || 'Blog Image'} width={500} height={300} />
                    </Link>
                  </div>

                  {/* <div className="tp-blog-date">
                      <span>{item.date}</span>
                    </div> */}
                    
                  <div className="tp-blog-meta d-flex align-items-center">
                    <div className={`tp-blog-category category-color-${item.color || 'default'}`}>
                      <span>{item.category.name}</span>
                    </div>
                    <div className="tp-blog-date">
                      {/* <span>{item.date}</span> */}
                    </div>
                  </div>
                  <div className="tp-blog-title-box ">
                    <Link href={`/blog-details/${item._id}`} passHref>
                    <h4 className="tp-blog-title-sm ">{item.title}</h4>
                    </Link>
                  </div>
                  <div className="tp-blog-author-info-box d-flex align-items-center">
                    {/* <div className="tp-blog-avatar">
                      <Image src={authorImgUrl} alt={item.author_name || 'Author'} width={50} height={50} />
                    </div> */}
                    {/* <div className="tp-blog-author-info">
                      <h5>{item.author_name}</h5>
                      <span>{item.job_title}</span>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
