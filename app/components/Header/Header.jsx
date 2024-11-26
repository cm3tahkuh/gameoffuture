"use client";

// import "../../globals.scss";
import "./Header.scss";

import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();

  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <motion.div
          className="header__row"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Логотип */}
          {pathname === "/" ? (
            <motion.img
              src="/src/logoHeader.svg"
              alt="HYSKY.PHY Logo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          ) : (
            <Link href="/">
              <motion.img
                src="/src/logoHeader.svg"
                alt="HYSKY.PHY Logo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </Link>
          )}

          {/* Ссылки */}
          <motion.ul
            className="header__links__block"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.li
              className="header__link"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
                Об играх
              </Link>
            </motion.li>
            <motion.li
              className="header__link"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/viewers"
                className={`${pathname === "/viewers" ? "active" : ""}`}
              >
                Зрителям
              </Link>
            </motion.li>
            <motion.li
              className="header__link"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/organizators"
                className={`${pathname === "/organizators" ? "active" : ""}`}
              >
                Организаторы
              </Link>
            </motion.li>
            <motion.li
              className="header__link"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/registration"
                className={`${pathname === "/registration" ? "active" : ""}`}
              >
                регистрация
              </Link>
            </motion.li>
          </motion.ul>
          

          {/* Социальные иконки */}
          <motion.div
            className="header__socials"
            variants={{
              hidden: { opacity: 0, x: 10 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.a href="#" whileHover={{ scale: 1.1 }}>
              <img src="/src/telegram.svg" alt="Telegram icon"></img>
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }}>
              <img src="/src/vk.svg" alt="VK icon"></img>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
