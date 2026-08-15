/**
 * Material Symbols icon wrapper.
 * `filled` toggles the FILL axis, `size` sets the font size in pixels.
 */
export default function Icon({
  name,
  size = 20,
  filled = false,
  className = "",
  style,
}) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: `${size}px`,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}`,
        ...style,
      }}
    >
      {name}
    </span>
  );
}
