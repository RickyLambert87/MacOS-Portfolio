import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 bg-white">
        {data.imageUrl ? (
          <div className="w-full">
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-[70vh] object-contain rounded"
            />
            </div>
        ) :null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
