function Button({
  children,
  href,
  variant = "primary",
  size = "normal",
  type = "button",
  className = "",
}) {
  const baseClass = `btn btn-${size} btn-${variant} `;
  const finalClassName = `${baseClass} ${className}`;

  // Si href est fourni → lien
  if (href) {
    // Détecte si le lien est externe (http:// ou https://)
    const isExternal = href.startsWith("http");

    return (
      <a
        href={href}
        className={finalClassName}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  // Sinon → vrai bouton
  return (
    <button type={type} className={finalClassName}>
      {children}
    </button>
  );
}

export default Button;
