import React from 'react';
import Head from 'next/head'; // Import Head for metadata
import dynamic from 'next/dynamic';
import { client } from '@/sanity/lib/client'; // Import the Sanity client
import { urlFor } from '@/sanity/lib/image'; // Import urlFor to generate image URLs

// Lazy load the Courses component with a loading placeholder
const Courses = dynamic(() => import('@/components/courses/page'), {
  loading: () => <div style={{ minHeight: '300px', width: '100%' }}>Loading courses...</div>,
});

const Page = async () => {
  // Fetch the image dynamically from Sanity
  const query = `*[_type == "course"][0]{image}`; // Fetch the first course's image field
  const course = await client.fetch(query);

  // Generate the image URL using urlFor
  const ogImageUrl = course?.image ? urlFor(course.image).url() : '';

  return (
    <div>
      <Head>
        {/* General Meta Tags */}
        <title>Study Visa Consultant - Galaxy Education</title>
        <meta name="description" content="A blog created with Next.js, Tailwind.css, and contentlayer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph Meta Tags for Facebook and LinkedIn */}
        <meta property="og:url" content="https://www.galaxyeducation.org/blog/course-promotion-cases-2" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Study Visa Consultant - Galaxy Education" />
        <meta property="og:description" content="Educational websites help students gain admission to top universities and enroll in the best courses." />
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
        <meta property="fb:app_id" content="your-app-id-here" /> {/* Replace with your Facebook app ID */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.galaxyeducation.org/blog/course-promotion-cases-2" />
        <meta name="twitter:title" content="Study Visa Consultant - Galaxy Education" />
        <meta name="twitter:description" content="Educational websites help students gain admission to top universities and enroll in the best courses." />
        {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}

        {/* LinkedIn Meta Tags (Open Graph tags also work for LinkedIn) */}
        <meta property="og:title" content="Study Visa Consultant - Galaxy Education" />
        <meta property="og:description" content="Educational websites help students gain admission to top universities and enroll in the best courses." />
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      </Head>

      {/* Reserve space for the Courses component to prevent layout shift */}
      <div style={{ minHeight: '300px', width: '100%' }}>
        <Courses />
      </div>
    </div>
  );
};

export default Page;
