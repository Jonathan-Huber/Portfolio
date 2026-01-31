import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_psyottl",
        "template_0dcmhkd",
        form.current,
        "fSINxRqajJldZDFqI",
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setStatus("error");
          console.error("Erreur EmailJS:", error);
          setTimeout(() => setStatus(""), 5000);
        },
      );
  };
  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-cyan-100 shadow-md rounded-lg p-6 md:p-10 space-y-6 "
      >
        {/* Nom */}
        <div>
          <label htmlFor="from_name" className="form-label">
            Nom
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Votre nom"
            autoComplete="name"
            required
            disabled={status === "sending"}
            className="form-input"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="from_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Votre adresse email"
            autoComplete="email"
            required
            disabled={status === "sending"}
            className="form-input"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Décrivez brièvement votre projet ou votre besoin"
            autoComplete="off"
            rows="5"
            required
            disabled={status === "sending"}
            className="form-input"
          ></textarea>
        </div>

        {/* Messages de statut */}
        {status === "success" && (
          <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center font-medium">
            Message envoyé avec succès !
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center font-medium">
            Erreur lors de l'envoi. Réessayez plus tard.
          </div>
        )}

        {/* Bouton */}
        <div className="flex justify-center">
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Envoi en cours..." : "Envoyer"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
