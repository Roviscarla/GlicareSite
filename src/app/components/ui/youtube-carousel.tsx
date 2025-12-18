"use client";

import React from "react";
import Slider from "react-slick";
import { IYouTubeVideo } from "@/app/models/youtube.interface";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowNext from "@/app/components/ui/arrow-next";
import ArrowPrev from "@/app/components/ui/arrow-prev";

interface YouTubeVideoCarouselProps {
  videos: IYouTubeVideo[];
  title?: string;
}

const YouTubeVideoCarousel: React.FC<YouTubeVideoCarouselProps> = ({
  videos,
  title,
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const getEmbedUrl = (videoId: string): string => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="py-8  text-center">
      {title && (
        <h3 className="text-xl font-semibold text-text-gray mb-6">{title}</h3>
      )}

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {videos.map((video) => (
            <div key={video.id} className="p-2 outline-none">
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src={getEmbedUrl(video.id)}
                    title={`Player de vídeo do YouTube: ${video.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default YouTubeVideoCarousel;
