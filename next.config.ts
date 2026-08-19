import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // 더미 프로젝트 썸네일. 실제 스크린샷으로 교체하면서
      // public/projects/*.png 등 로컬 이미지를 쓰게 되면 제거해도 됩니다.
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
