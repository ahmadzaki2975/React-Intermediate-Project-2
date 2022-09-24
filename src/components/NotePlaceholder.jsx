import PlaceholderLoading from "react-placeholder-loading";

export const NotePlaceholder = () => {
  return (
    <div className="overflow-hidden rounded flex flex-col gap-2 p-5 bg-blue-400">
      <PlaceholderLoading
        shape="rect"
        width="100%"
        height="10px"
        colorEnd="rgb(147 197 253)"
        colorStart="white"
      />
      <PlaceholderLoading shape="rect" width="40%" height="5px" />
      <div className="w-full h-[1px] bg-white mb-2"></div>
      <PlaceholderLoading shape="rect" width="100%" height="5px" />
      <PlaceholderLoading shape="rect" width="100%" height="5px" />
      <PlaceholderLoading shape="rect" width="100%" height="5px" />
      <PlaceholderLoading shape="rect" width="60%" height="5px" />
    </div>
  );
};
