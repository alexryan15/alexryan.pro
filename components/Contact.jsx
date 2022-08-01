import React, { useState } from "react";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div id="contact" className="w-full">
      <div className="w-11/12 md:w-full flex-1 place-items-center max-w-[50rem] m-auto px-2 py-16">
        <h2 className="text-3xl pb-8 text-center tracking-widest uppercase text-HIGHLIGHT">
          Contact
        </h2>
        <div className="border-2 rounded-xl justify-center gap-8">
          <div className="h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                method="POST"
                action="https://getform.io/f/52c99319-15fa-4fb0-a280-6feceb9a7fe7"
              >
                <div className="gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-HIGHLIGHT"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e?.target?.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-HIGHLIGHT"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:border-HIGHLIGHT"
                    rows="8"
                    value={message}
                    onChange={(e) => setMessage(e?.target?.value)}
                    name="message"
                    required
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
