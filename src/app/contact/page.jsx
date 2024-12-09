import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Contact() {
  return (
    <section className="min-h-[calc(100dvh-76px)] grid content-center max-sm:py-16">
      <h1 className="text-5xl font-bold text-center mb-8">Contact us</h1>

      <div className="px-5 max-w-6xl w-full mx-auto grid sm:grid-cols-3 gap-10">
        <div className="w-full relative rounded-md overflow-hidden col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256.6461678195416!2d80.99827690377921!3d26.959299499020993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399959df9d457f21%3A0xd024601dda270803!2sProficio%20Softwarea%20Solutions!5e0!3m2!1sen!2sin!4v1733759183169!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="absolute inset-0 border-none"
            title="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-full"
        >
          <input
            type="hidden"
            name="access_key"
            value="d7ccd6d0-dae4-4f5b-8f0e-b3221100513f"
          />
          <div className="relative mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="relative mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="relative mb-4">
            <Label htmlFor="mobile">Mobile</Label>
            <Input
              type="tel"
              placeholder="Mobile number"
              id="mobile"
              name="mobile"
              required
            />
          </div>
          <div className="relative mb-4">
            <Label htmlFor="email">Inquiry</Label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
