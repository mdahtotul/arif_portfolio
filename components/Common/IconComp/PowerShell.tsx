import { TIconCompProps } from "@/types/commonTypes";

export default function PowerShell({ className }: TIconCompProps) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className={className}>
      <rect
        width="48"
        height="48"
        x="0"
        y="0"
        rx="30"
        fill="transparent"
        stroke="transparent"
        strokeWidth="0"
        strokeOpacity="100%"
        paintOrder="stroke"
      ></rect>
      <svg width="48px" height="48px" viewBox="0 0 32 32" fill="#1C2033">
        <g fill="#1C2033">
          <path
            fill="currentColor"
            d="M30.906 4.104c.76 0 1.234.615 1.057 1.38l-4.88 21.307c-.172.76-.927 1.38-1.682 1.38H1.094c-.76 0-1.234-.62-1.057-1.38l4.88-21.307c.172-.766.927-1.38 1.682-1.38zM19.74 16.563c.339-.526.302-1.208-.12-1.656l-7.458-7.938c-.505-.536-1.38-.542-1.953-.005c-.573.542-.625 1.411-.12 1.948l6.219 6.615v.146L6.412 22.84c-.599.432-.708 1.302-.25 1.938c.464.635 1.323.797 1.922.359l10.974-7.88c.37-.26.583-.49.682-.693zm-3.724 5.864a1.239 1.239 0 0 0-1.25 1.229a1.24 1.24 0 0 0 1.25 1.234h5.906a1.24 1.24 0 0 0 1.25-1.234a1.24 1.24 0 0 0-1.25-1.229z"
          />
        </g>
      </svg>
    </svg>
  );
}
