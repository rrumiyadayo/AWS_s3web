import React from 'react';
import CardStack from '../components/CardStack';

function HomePage() {
  const experiencesData = {
    member1: [
      { slug: 'member1-experience1', title: 'My First AWS Project', summary: 'Learned about S3 and static hosting.' },
      { slug: 'member1-experience2', title: 'Building a Simple API', summary: 'Exploring serverless functions with AWS Lambda.' },
      { slug: 'member1-experience3', title: 'Database Adventures', summary: 'Working with relational databases in the cloud.' },
    ],
    member2: [
      { slug: 'member2-experience1', title: 'Frontend Framework Fun', summary: 'Diving deep into React components.' },
      { slug: 'member2-experience2', title: 'CSS Artistry', summary: 'Creating beautiful layouts with Tailwind CSS.' },
      { slug: 'member2-experience3', title: 'JavaScript Mastery', summary: 'Advanced concepts and problem-solving.' },
    ],
    member3: [
      { slug: 'member3-experience1', title: 'Cloud Security Basics', summary: 'Understanding fundamental security principles in AWS.' },
      { slug: 'member3-experience2', title: 'Infrastructure as Code', summary: 'Automating infrastructure with Terraform.' },
      { slug: 'member3-experience3', title: 'DevOps Pipelines', summary: 'Setting up CI/CD for our projects.' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-full sm:px-6 lg:px-8"> {/* Adjusted max-width and added padding */}

        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl p-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Our Club's Experiences</h1>
            <p className="mt-2 text-gray-600">Explore what we've been learning and building.</p>
          </div>
          <div className="mt-8 flex flex-row justify-between space-x-4 md:space-x-8"> {/* Changed justify-around to justify-between and added space-x */}
            <CardStack memberName="Member 1" experiences={experiencesData.member1} />
            <CardStack memberName="Member 2" experiences={experiencesData.member2} />
            <CardStack memberName="Member 3" experiences={experiencesData.member3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;