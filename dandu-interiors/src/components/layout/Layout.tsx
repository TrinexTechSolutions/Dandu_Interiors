import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import ScrollToTop from "../../utils/ScrollToTop";
import ClickSpark from "../animation/ClickSpark";

function Layout() {
  const location = useLocation();

  return (
    <>
      <ClickSpark
        sparkColor='#D4AF37'
        sparkSize={15}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      />
      <ScrollToTop />
      <Header />
      <main className="page-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

export default Layout;
