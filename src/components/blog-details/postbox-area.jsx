import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnswerQuestion from '@/common/answer-question';
import SEO from '@/common/seo';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const PostboxArea = ({ blogData }) => {
  if (!blogData) {
    return <p>Loading blog details...</p>;
  }

  const {
    title,
    content,
    image,
    author,
    category,
 
  } = blogData;

  return (
    <div className="postbox__area pt-100 pb-100">
      <SEO pageTitle={title} />

      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__details-wrapper pr-20">
              <article>
                <div className="postbox__details-title-box pb-30">
                  <h4>{title}</h4>
                </div>
                <div className="postbox__thumb w-img">
                  <Image src={`${baseUrl}${image}`} alt={title} width={800} height={500} />
                </div>
                <div className="postbox__details-title-box pb-30">

                  <p>{content}</p>
                </div>
                <p><strong>{author}</strong></p>

                {/* Additional content and details */}
              </article>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="sv-details-widget">
              <div className="sv-details-category mb-30">
                <div className="sv-details-category-title">
                  <h4 className="sv-details-title-sm">Blog Category</h4>
                </div>
                <div className="sv-details-category-list">
                  <ul>
                    <li className="active">
                      <Link href="#"><span>{category}</span><i className="fal fa-angle-right"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="tp-faq-area pt-50">
                <div className="container p-0">
                  <div className="row g-0">
                    <div className="col-xl-12">
                      <h4 className="sv-details-title">Any Questions find here.</h4>
                      <AnswerQuestion style={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostboxArea;
