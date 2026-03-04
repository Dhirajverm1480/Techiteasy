export const FeatureCard = ({ title, description }) => (
  <div className="h-48 flex flex-col justify-center bg-white rounded-xl px-6 shadow-sm">
    <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
    <h3 className="text-lg font-bold my-3">{title}</h3>
    <p className="text-gray-500 font-medium">{description}</p>
  </div>
);
