import { useEffect, useState } from "react";
import Content from "./Content";

interface MultiColumnTextProps {
  text: string;
  numberOfColumns: number;
}

const MultiColumnText: React.FC<MultiColumnTextProps> = ({ text, numberOfColumns }) => {
  const [columns, setColumns] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Split text into words
    const words = text.split(' ');
    const wordsPerColumn = Math.ceil(words.length / numberOfColumns);

    // Create columns array
    const columnData = [];
    for (let i = 0; i < numberOfColumns; i++) {
      const startIndex = i * wordsPerColumn;
      const endIndex = Math.min(startIndex + wordsPerColumn, words.length);
      const columnText = words.slice(startIndex, endIndex).join(' ');
      columnData.push(columnText);
    }
    setColumns(columnData);

    // Check if the screen is mobile
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [
    text, numberOfColumns
  ])



  // Generate column classes based on number of columns
  const getColumnClass = () => {
    switch (numberOfColumns) {
      case 1: return 'md:grid-cols-1 grid-cols-1';
      case 2: return 'md:grid-cols-2 grid-cols-1';
      case 3: return 'md:grid-cols-3 grid-cols-1';
      case 4: return 'md:grid-cols-4 grid-cols-1';
      case 5: return 'md:grid-cols-5 grid-cols-1';
      case 6: return 'md:grid-cols-6 grid-cols-1';
      default: return 'md:grid-cols-1 grid-cols-1';
    }
  };



  return (
    <div className={`grid ${getColumnClass()} md:gap-6 gap-1 max-w-6xl `}>
      {isMobile && <Content>{text}</Content>}
      {!isMobile && columns.map((columnText, index) => (
        <Content
          key={index}
        >
          {columnText}
        </Content>
      ))}
    </div>
  );
};


export default MultiColumnText