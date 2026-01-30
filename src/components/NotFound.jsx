import Button from "./Button";

function NotFound() {
  return (
    <>
      <div className="bg-cyan-50 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl rotate-3">404</h1>
        <p>Page introuvable</p>
        <Button href="/">Retour à l’accueil</Button>
      </div>
    </>
  );
}
export default NotFound;
