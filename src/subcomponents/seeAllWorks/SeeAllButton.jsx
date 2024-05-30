import { motion } from "framer-motion";
function SeeAllButton({ title, Icon, styles }) {
  return (
    <motion.button
      style={styles}
      className="
    flex flex-row justify-center items-center 
    rounded-md
    text-[#473BF0]
    font-medium
    text-xl
    py-2 px-4 gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.25, 0.75, 1, 0.75, 0.25, 0] }}
      transition={{ ease: "easeInOut", duration: 1.5, repeat: Infinity }}
    >
      <p>{title}</p>
      <div>{Icon}</div>
    </motion.button>
  );
}
export default SeeAllButton;
