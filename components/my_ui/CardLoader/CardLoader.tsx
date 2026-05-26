export default function CardLoader() {

  return (
    <div
      className="
        animate-pulse
        overflow-hidden
        rounded-2xl
        border
        bg-white
      "
    >

      {/* Image */}
      <div className="h-56 w-full bg-gray-200" />

      <div className="space-y-4 p-4">

        {/* Title */}
        <div className="h-5 w-3/4 rounded bg-gray-200" />

        {/* Location */}
        <div className="h-4 w-1/2 rounded bg-gray-200" />

        {/* Price */}
        <div className="h-6 w-1/3 rounded bg-gray-200" />

        {/* Tags */}
        <div className="flex gap-2">

          <div className="h-8 w-20 rounded-full bg-gray-200" />

          <div className="h-8 w-20 rounded-full bg-gray-200" />

          <div className="h-8 w-20 rounded-full bg-gray-200" />

        </div>

      </div>

    </div>
  )
}