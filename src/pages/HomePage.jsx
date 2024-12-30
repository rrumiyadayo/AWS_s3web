import React from 'react';
import CardStack from '../components/CardStack';
import experiencesData from '../assets/experiencesData.json';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      {/* ロゴを追加 */}
      <div className="flex justify-center mb-8">
        <img src="/logow.png" alt="Bluedit Logo" className="w-64 h-auto" />
      </div>

      <div className="text-center mb-8">
      <h2>Clear blue spring</h2>
            <h3>青春のように、AWSに夢中になった件</h3>
        <p className="mt-2 text-gray-600 mx-auto max-w-4xl text-center">
          ルミアの初ウェブページ、Blueditへようこそ！
          <br />
          Blueditは、AWSを学習する中で生まれた、Amazon S3を使った静的ウェブサイトのホスティングプロジェクトです。
          Redditのコミュニティ文化からインスピレーションを得て、ユーザー同士が助け合い、共に学び、IT業界の未来を創造していくことを「ハッピーエンド」と考えています。
          Blueditで、あなたの情熱を共有し、共に成長しませんか？
        </p>
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