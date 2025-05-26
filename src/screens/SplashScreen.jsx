import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const [reveal, setReveal] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [swipedUp, setSwipedUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t1 = setTimeout(() => setReveal(true), 200);
    const t2 = setTimeout(() => setShowContent(true), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      setSwipedUp(true);
      setTimeout(() => navigate('/sleep0'), 500);
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <div
      {...handlers}
      className={`relative w-full h-screen overflow-hidden bg-white transition-transform duration-500 ${
        swipedUp ? '-translate-y-full' : ''
      }`}
    >
      {/* Expanding Circle Animation */}
      <div
        className={`absolute top-1/2 left-1/2 rounded-full bg-[#040826] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-[1000ms] ease-in-out z-0 ${
          reveal ? 'w-[200vmax] h-[200vmax]' : 'w-24 h-24'
        }`}
      ></div>

      {showContent && (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 78 82"
            fill="none"
            className="mb-6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.568 11.1042H42.432C48.4055 11.1042 53.1375 11.1042 56.8393 11.6269C60.6483 12.1667 63.7325 13.3011 66.1667 15.8567C68.5977 18.4158 69.6768 21.6582 70.1902 25.6626C70.681 29.5097 70.6875 34.4092 70.6875 40.5866C71.8055 41.5535 72.6928 42.8074 73.255 44.239C73.6483 45.2298 73.801 46.2548 73.8725 47.3379C73.9375 48.3766 73.9375 49.6442 73.9375 51.1646V51.3354C73.9375 52.8558 73.9375 54.1234 73.8725 55.1621C73.8318 56.2239 73.6231 57.2712 73.255 58.261C72.8062 59.4013 72.1481 60.4375 71.3184 61.3104C70.4886 62.1833 69.5034 62.8758 68.419 63.3484C67.4765 63.7584 66.5015 63.919 65.4713 63.9907C65.0439 64.0212 64.6158 64.0406 64.1875 64.0488V68.3333C64.1875 69.0129 63.9307 69.6647 63.4736 70.1453C63.0165 70.6258 62.3965 70.8958 61.75 70.8958C61.1035 70.8958 60.4835 70.6258 60.0264 70.1453C59.5693 69.6647 59.3125 69.0129 59.3125 68.3333V64.0625H18.6875V68.3333C18.6875 69.0129 18.4307 69.6647 17.9736 70.1453C17.5165 70.6258 16.8965 70.8958 16.25 70.8958C15.6035 70.8958 14.9835 70.6258 14.5264 70.1453C14.0693 69.6647 13.8125 69.0129 13.8125 68.3333V64.0454C13.3842 64.0383 12.9562 64.0201 12.5288 63.9907C11.5191 63.9502 10.5228 63.7331 9.581 63.3484C8.49601 62.8762 7.51018 62.1839 6.67983 61.3109C5.84949 60.438 5.19091 59.4016 4.74175 58.261C4.35175 57.2702 4.199 56.2452 4.13075 55.1621C4.0625 54.1234 4.0625 52.8558 4.0625 51.3354V51.1646C4.0625 49.6442 4.0625 48.3766 4.1275 47.3379C4.199 46.2514 4.355 45.2298 4.745 44.239C5.3034 42.8179 6.18502 41.5626 7.3125 40.5832C7.3125 34.4127 7.319 29.5097 7.80975 25.6626C8.32325 21.6582 9.40225 18.4158 11.8333 15.8567C14.2675 13.3011 17.3518 12.1667 21.1608 11.6269C24.8658 11.1042 29.5945 11.1042 35.568 11.1042Z"
              fill="#F4F4F4"
            />
          </svg>

          <h1 className="text-4xl font-bold tracking-wide">Hello</h1>

          <div className="absolute bottom-6 text-center text-sm text-white/70">
            <p className="font-semibold text-white">by IKEA</p>
            <p className="text-xs mt-1">Swipe up to start</p>
          </div>
        </div>
      )}
    </div>
  );
}
