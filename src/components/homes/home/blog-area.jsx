import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const BlogArea = () => {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/blogs`);
                setBlogData(response.data);
            } catch (err) {
                console.error("Error fetching blog data", err);
                setError("Failed to load blog articles.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, [baseUrl]);

    const handleRetry = () => {
        setLoading(true);
        setError(null);
        fetchBlogData();
    };

    if (loading) {
        return (
            <div className="tp-blog-area pb-80">
                <div className="container text-center">
                    <Spinner animation="border" />
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
                    <button onClick={handleRetry}>Retry</button>
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
                    {blogData.slice(0, 3).map((item) => {
                        const imgUrl = item.image ? `${baseUrl}${item.image}` : '/images/default-image.jpg';
                        const authorImgUrl = item.image ? `${baseUrl}${item.image}` : '/images/default-author.jpg';

                        return (
                            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-60">
                                <div className="tp-blog-item">
                                    <div className="tp-blog-thumb fix">
                                        {/* Link to the blog page with hash */}
                                        <Link href={`http://localhost:3001/#/blog`} passHref>
                                            <Image src={imgUrl} alt={item.title} width={500} height={300} />
                                        </Link>
                                    </div>
                                    <div className="tp-blog-meta d-flex align-items-center">
                                        <div className={`tp-blog-category category-color-${item.color}`}>
                                            <span>{item.category}</span>
                                        </div>
                                        <div className="tp-blog-date">
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                    <div className="tp-blog-title-box">
                                        <Link className="tp-blog-title-sm" href={`http://localhost:3001/#/blog`} passHref>
                                            {item.title}
                                        </Link>
                                    </div>
                                    <div className="tp-blog-author-info-box d-flex align-items-center">
                                        <div className="tp-blog-avata">
                                            <Image src={authorImgUrl} alt={item.author_name} width={50} height={50} />
                                        </div>
                                        <div className="tp-blog-author-info">
                                            <h5>{item.author_name}</h5>
                                            <span>{item.job_title}</span>
                                        </div>
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





