import React from "react";
import { motion } from "framer-motion";
import MotionHoverUp from "../components/MotionHoverUp";

function Header() {
  return (
    <MotionHoverUp>
      <div className="my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-left mb-12 mx-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <div id="about" style={{ scrollMarginTop: "13rem" }}>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Clear blue spring
                <br />
                青春のように、AWSに夢中になった件
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500">
                Blueditは、AWSを学習する中で生まれた、Amazon
                S3を使った静的ウェブサイトのホスティングプロジェクトです。
                Redditのコミュニティ文化からインスピレーションを得て、ユーザー同士が助け合い、共に学び、IT業界の未来を創造していくことを「ハッピーエンド」と考えています。
                Blueditで、あなたの情熱を共有し、共に成長しませんか？
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionHoverUp>
  );
}

export default Header;
