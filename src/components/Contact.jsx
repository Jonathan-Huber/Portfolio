import Button from "./Button";

function ContactForm() {
  return (
    <>
      <form className="bg-cyan-600 shadow-md rounded-lg p-6 md:p-10 space-y-6 ">
        {/* Nom */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom"
            autoComplete="name"
            required
            className="bg-cyan-50 mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre adresse email"
            autoComplete="email"
            required
            className="bg-cyan-50 mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Décrivez brièvement votre projet ou votre besoin"
            autoComplete="off"
            rows="5"
            required
            className="bg-cyan-50 mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          ></textarea>
        </div>

        {/* Bouton */}
        <div className="flex justify-center">
          <Button type="submit" variant="secondary" className="bg-cyan-50">
            Envoyer
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
