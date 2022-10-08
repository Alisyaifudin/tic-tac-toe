import Box from "../Box/Box";
import styles from "./Layout.module.css";

interface LayoutProps{
  boxes: string[];
  onClick: (value: number) => void;
}

function Layout({ boxes, onClick }: LayoutProps) {
  return (
    <div className={styles.layout}>
      {boxes.map((value, i) => (
        <Box key={i} value={value} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Layout;