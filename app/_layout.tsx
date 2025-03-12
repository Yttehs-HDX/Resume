import { BasicInfo } from "@/constants/BasicInfo";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    const updateTitleAndFavicon = () => {
      const isHidden = document.visibilityState === 'hidden';
      if (isHidden) {
        document.title = `${BasicInfo.NicknameShort}'s Resume`;
      } else {
        document.title = "( ゜-゜)つロ乾杯~";
      }
    }
    updateTitleAndFavicon();
    document.addEventListener('visibilitychange', updateTitleAndFavicon);
    return () => {
      document.removeEventListener('visibilitychange', updateTitleAndFavicon);
    };
  }, []);

  return <Stack />;
}
