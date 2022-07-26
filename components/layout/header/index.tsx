import { Logo } from "components/shared";
import Link from "next/link";
import React from "react";
import styles from './index.module.scss';

const words = ["lets", "get", "started", "on", "something", "big", "today!"];

const Header: React.FC = () => {
  const [index, setIndex] = React.useState<number>(0);
  const [mobile, setMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const isMobile = window.innerWidth < 600;
    setMobile(isMobile);
  }, []);

  React.useEffect(() => {
    const wordChange = setInterval(() => {
      setIndex((prev: number) => {
        const next = prev + 1;
        if (next > words.length - 1) {
          return 0;
        }
        return next;
      })
    }, 2000);

    return () => {
      clearInterval(wordChange);
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        {/* {!mobile && (
          <div className={styles.left}>
            <p>✦{words[index]}✦</p>
          </div>
        )} */}
        <div className={styles.right}>
          <Logo width={mobile ? 150 : 180} />
        </div>
      </div>
    </header>
  )
}

export default Header;