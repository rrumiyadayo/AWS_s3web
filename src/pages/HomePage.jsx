import React from 'react';
import CardStack from '../components/CardStack';
import experiencesData from '../assets/experiencesData.json'; // Adjust the path based on where you created the file

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">私たちの経験</h1>
        <p className="mt-2 text-gray-600">私たちの学びと成果をご覧ください。</p>
      </div>

      <div className="relative py-3 sm:max-w-full sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl p-24">
          <div className="flex flex-col items-center justify-center min-h-[500px]">
            <div className=" flex flex-row justify-center space-x-12">
              <div className="w-[30rem]">
                <CardStack memberName="メンバー 1" experiences={experiencesData.member1} />
              </div>
              <div className="w-[30rem]">
                <CardStack memberName="メンバー 2" experiences={experiencesData.member2} />
              </div>
              <div className="w-[30rem]">
                <CardStack memberName="メンバー 3" experiences={experiencesData.member3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;