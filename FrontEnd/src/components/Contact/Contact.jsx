import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import botImage from "../../assets/bot.jpg.png";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = {
      user_email: form.current.user_email.value,
      user_name: form.current.user_name.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        form.current.reset();
      } else {
        toast.error("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Something went wrong. Check your server connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-center py-24 px-[8vw] gap-16 bg-gradient-to-b from-[#0d081f] to-[#1a1039]"
    >
      <ToastContainer />

      {/* Bot Side */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-[4px] shadow-[0_0_40px_rgba(168,85,247,0.6)]">
          <div className="rounded-full bg-[#0d081f] p-6">
            <img
              src={botImage}
              alt="Friendly Bot"
              className="w-[220px] md:w-[300px] lg:w-[340px] rounded-full animate-floating"
            />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1 w-full max-w-md bg-[#0d081f]/80 p-8 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-md">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-white tracking-wide">CONTACT</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg font-medium">
            I’d love to hear from you—reach out for any opportunities or questions!
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            {isSending ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
