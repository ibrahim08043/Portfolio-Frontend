import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import ContactInfo from "@/components/shared/ContactInfo";
import { staggerContainer, fadeIn } from "@/lib/framer-animations";

const ContactSection = () => (
  <section id="contact" className="py-24 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full
                    bg-[#B5FF4D]/[0.02] blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-5 md:px-10">
      <SectionHeading
        title="Get In Touch"
        badge="Contact"
        sectionNumber="06"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
        accentColor="primary"
      />

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Contact Form */}
        <motion.div
          className="bg-[#111] rounded border border-[#2C2C2C] p-7"
          style={{ borderTopColor: "#B5FF4D", borderTopWidth: "2px" }}
          variants={fadeIn("right")}
        >
          <h3 className="font-display font-bold text-base text-[#B5FF4D] mb-6 font-mono tracking-wide">
            Send Me a Message
          </h3>
          <ContactForm />
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeIn("left")}>
          <ContactInfo />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
