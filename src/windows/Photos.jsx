import { WindowControls } from "#components"
import { gallery, photosLinks } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"
import { Search, Share2 } from "lucide-react"

const Photos = () => {
  const { openWindow } = useWindowStore()

  return (
    <>
      <div id="window-header">
        <WindowControls target='photos' />
        <h2 className="font-bold text-sm">Photos</h2>
        <div className="flex items-center gap-2">
          <Share2 className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex h-full">
        <div className="sidebar">
          <div className="mb-5">
            <h3 className="text-xs font-semibold text-gray-400 mb-3 px-3">Library</h3>
            <ul>
              {photosLinks.map(({ id, icon, title }) => (
                <li key={id}>
                  <img src={icon} alt={title} />
                  <p>{title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gallery">
          <div className="gallery-header">
            <h2 className="text-xl font-semibold text-gray-800">My Memories</h2>
            <p className="text-sm text-gray-500">{gallery.length} photos</p>
          </div>
          <ul className="gallery-grid">
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: `Gallery ${id}`,
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img,
                  })
                }
              >
                <img src={img} alt={`Gallery ${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const PhotoWindow = WindowWrapper(Photos, "photos")

export default PhotoWindow
