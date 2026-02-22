import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Anurag
      </motion.h3>

      <div>
        {["about", "experience", "projects", "skills", "contact"].map(
          (item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                color: "#ffffff",
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          )
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;