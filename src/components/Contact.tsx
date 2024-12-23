import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";

export default function Contact() {
  return (
    <section
      id="contact"
      className="md:mx-6 lg:mx-24 px-6 md:px-0 py-10 md:py-24 flex flex-col items-center"
    >
      <div className="w-full justify-center text-center mb-8 lg:mb-14">
        <h2 className="font-medium text-3xl md:text-4xl mb-5">Contact Form</h2>
        <p>
          I&apos;m always interested in hearing about new projects, so if
          you&apos;d like to chat please get in touch.
        </p>
      </div>
      <form
        action="https://formspree.io/f/xlezzzro"
        method="POST"
        id="form"
        className="flex flex-col gap-6 px-4 max-w-7xl w-full"
      >
        <div className="flex flex-col md:flex-row w-full gap-6">
          <Input
            id="first-name"
            type="text"
            name="first-name"
            required
            maxLength={30}
            placeholder="Firts name"
          />

          <Input
            id="last-name"
            type="text"
            name="last-name"
            required
            maxLength={30}
            placeholder="Last name"
          />
        </div>

        <Input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Email address"
        />

        <Textarea
          id="text-area"
          name="message"
          maxLength={500}
          placeholder="Type your message here"
          required
        />

        <div className="button-errormessage">
          <Button type="submit" size="lg">
            Send Message
          </Button>

          <small id="error-message" />
        </div>
      </form>
    </section>
  );
}
