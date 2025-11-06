const CategoryBadge = ({ category, variant = "default" }) => {
  const variantStyles = {
    default: "bg-primary-100 text-primary-700 border border-primary-200",
    case: "bg-blue-100 text-blue-700 border border-blue-200",
    social: "bg-pink-100 text-pink-700 border border-pink-200",
    logo: "bg-purple-100 text-purple-700 border border-purple-200",
    pdf: "bg-orange-100 text-orange-700 border border-orange-200",
    tech: "bg-green-100 text-green-700 border border-green-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
        variantStyles[variant] || variantStyles.default
      }`}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;
