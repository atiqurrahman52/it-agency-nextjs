import BlogBanner from '@/components/blog/BlogBanner';
import FeaturedBlog from '@/components/blog/FeaturedBlog';
import LatestPost from '@/components/blog/LatestPost';
import Subscribe from '@/components/share/Subscribe';
import Head from 'next/head';
import React from 'react';

const index = () => {
    return (
        <div>
            <Head>
                <title>Blog</title>
            </Head>
            <BlogBanner />
            <FeaturedBlog />
            <LatestPost />
            <Subscribe />
            
        </div>
    );
};

export default index;