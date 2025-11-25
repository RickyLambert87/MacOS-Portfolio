import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>
      <div className="p-5 space-y-6 bg-white">
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-auto border-4 rounded-full mb-2"
          />
        )}
        {data.subtitle && (
          <h3 className="text-lg font-semibold">{data.subtitle}</h3>
        )}
        {data.description && data.description.length > 0 && (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {data.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
