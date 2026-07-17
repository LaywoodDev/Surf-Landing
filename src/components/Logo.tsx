interface LogoProps {
  className?: string
  showText?: boolean
  textClassName?: string
}

export function Logo({ className = '', showText = true, textClassName = '' }: LogoProps) {
  return (
    <div className={`logo ${className}`}>
      <img
        className="logo-icon"
        src="/Logo.svg"
        alt=""
        width="36"
        height="21"
        aria-hidden="true"
      />
      {showText && <span className={`logo-text ${textClassName}`}>Surf</span>}
    </div>
  )
}
