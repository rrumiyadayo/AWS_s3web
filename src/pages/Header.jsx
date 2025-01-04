import React from "react";
import { motion } from "framer-motion";
import MotionHoverUp from "../components/MotionHoverUp";

function Header() {
  return (
    <>
      <MotionHoverUp>
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <div id="about" style={{ scrollMarginTop: '10rem' }}>
            <h2>Clear blue spring</h2>
            <h3>青春のように、AWSに夢中になった件</h3>
            <p className="mt-2 text-gray-600 mx-auto max-w-4xl text-center">
              ルミアの初ウェブページ、Blueditへようこそ！
              <br />
              Blueditは、AWSを学習する中で生まれた、Amazon
              S3を使った静的ウェブサイトのホスティングプロジェクトです。
              Redditのコミュニティ文化からインスピレーションを得て、ユーザー同士が助け合い、共に学び、IT業界の未来を創造していくことを「ハッピーエンド」と考えています。
              Blueditで、あなたの情熱を共有し、共に成長しませんか？
            </p>
          </div>
        </motion.div>
      </MotionHoverUp>
    </>
  );
}

export default Header;