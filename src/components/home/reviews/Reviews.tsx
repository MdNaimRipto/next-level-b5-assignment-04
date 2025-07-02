import React from "react";
import TitleMain from "../../common/titles/TitleMain";

const sampleReviews = [
  {
    reviewer: "Alice Rahman",
    book: "The Silent Patient",
    content:
      "An absolutely gripping psychological thriller. Couldn't stop reading till the last page!",
    rating: 5,
  },
  {
    reviewer: "Rafiul Islam",
    book: "Atomic Habits",
    content:
      "Practical, actionable, and truly life-changing. Highly recommended for habit building.",
    rating: 4,
  },
  {
    reviewer: "Sarah Ahmed",
    book: "The Hobbit",
    content:
      "A magical journey filled with adventure and heart. A timeless classic I revisit often.",
    rating: 5,
  },
];

const Reviews: React.FC = () => {
  return (
    <div className="container mx-auto py-10" id="reviews">
      <TitleMain title="What Readers Say" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleReviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <h3 className="text-lg font-semibold mb-1">{review.reviewer}</h3>
            <p className="text-sm text-lightBlack mb-2">
              on <span className="font-medium">{review.book}</span>
            </p>
            <p className="text-sm text-gray mb-4 italic">“{review.content}”</p>
            <div className="flex gap-1 text-primary2 text-xl">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
