export const ReviewCard = ({ id, userName, reviewDate, rating, comment }) => {
  return (
    <div
      key={id}
      className="w-full min-w-80 md:min-w-[440px] bg-white mb-2 mr-2 p-4 rounded-lg shadow-md"
    >
      <div className="flex gap-3 items-center mb-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div>
          <h3 className="font-bold">{userName}</h3>
          <span>{reviewDate}</span>
        </div>
      </div>
      <div className="my-3">
        {"⭐".repeat(rating)}
        {/* {[...Array(item.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))} */}
      </div>
      <p className="text-gray-500 text-xs md:text-md">{comment}</p>
    </div>
  );
};
