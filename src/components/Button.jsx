import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

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
    // Détecte si le lien est une ancre
    const isAnchor = href.startsWith("#");

    // Ancre → <a>
    if (isAnchor) {
      return (
        <HashLink smooth to={href} className={finalClassName}>
          {children}
        </HashLink>
      );
    }

    // Liens internes → React Router Link
    if (!isExternal) {
      return (
        <Link to={href} className={finalClassName}>
          {children}
        </Link>
      );
    }

    // Liens externes → <a>
    return (
      <a
        href={href}
        className={finalClassName}
        target="_blank"
        rel="noopener noreferrer"
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
