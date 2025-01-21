import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import useMultipleAnime from '../../../hooks/useMultipleAnime';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const Portfolio = () => {
  const { dataRef } = useMultipleAnime();
  const [items, setItems] = useState([]);
  const originalItemsRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/blogs`); // Adjust endpoint as per your API
        console.log("blog----->", response.data);
        setItems(response.data?.blogs);
        originalItemsRef.current = response.data?.blogs; // Store original data in useRef
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const categories = [
    "All",
    ...new Set(originalItemsRef.current.map((item) => item.category)), // Ensure categories are derived from original items
  ];

  const filterItems = (cateItem) => {

    if (cateItem === "All") {
      setItems(originalItemsRef.current);
    } else {
      const findItems = originalItemsRef.current.filter((findItem) => findItem.category === cateItem);
      setItems(findItems);
    }
  };

  return (
    <div className="portfolio blog-grid-inner mb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-about__section-box text-center mb-40">
              <h4 className="inner-section-subtitle">OVER 150K+ CLIENT</h4>
              <h3 className="tp-section-title">Accomplish more, Together</h3>
              <p>Softuch blog is your knowledge center for everything remote.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="portfolio-filter masonary-menu text-center mb-35">
              {categories.map((cate, i) => (
                <button
                  onClick={() => filterItems(cate)}
                  key={i}
                >
                  <span>{cate}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row grid blog-grid-inner" ref={dataRef}>
          {items.map((item, i) => (
            <div key={item._id} data-index={i} className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat1 cat4 cat3 cat5">
              <div className="tp-blog-item">
                <div className="tp-blog-thumb fix">
                  <Link href={`/blog-details/${item._id}`}>

                    <Image style={{ width: "100%", height: "200px" }} className="w-100" src={`${baseUrl}${item.image}`} alt="Portfolio Thumbnail" width={400} height={50} />

                  </Link>
                </div>
                <div className="tp-blog-content">
                  <div className="tp-blog-meta d-flex align-items-center">
                    <div className="tp-blog-category category-color-1">
                      <span>{item.category}</span>
                    </div>
                    <div className="tp-blog-date">
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <div className="tp-blog-title-box">
                    <Link href={`/blog-details/${item._id}`}> 
                      {item.title}
                    </Link>
                  </div>
                  <div className="tp-blog-author-info-box d-flex align-items-center">
                    <div className="tp-blog-author-info">
                      <h5>{item.name}</h5>
                      <span>{item.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
