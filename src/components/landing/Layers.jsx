import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // استفاده از ترجمه

const Layers = () => {
  const { t } = useTranslation(); // ترجمه

  return (
    <>
      <motion.h1 className="text-sm lg:text-xl font-bold text-white whitespace-nowrap">
        {t("servicesWeProvide")} {/* متن ترجمه شده */}
      </motion.h1>
      <motion.div className="rounded-full p-1 bg-white"></motion.div>
    </>
  );
};

export default Layers;
