import { useEffect, useRef, useState } from "react";
import "pdfjs-dist/web/pdf_viewer.css";


import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export const PDFViewer = ({ file }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions(); // Initial size

    // Observe resize dynamically
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const loadPDF = async () => {
      const loadingTask = pdfjsLib.getDocument(file);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 1.2 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(canvas);
        page.render({ canvasContext: context, canvas, viewport });
       };
    

    try {
     loadPDF();
    } catch (e) {
      if (e) {
        console.error("Failed to load PDF due to invalid structure:", e.message);
        // Display an error message to the user or take other appropriate action
      } else {
        // Handle other potential errors
        console.error("An unexpected error occurred:", e);
      }
    }
  }, [file]);

  return (
    <div
      ref={containerRef}
      onContextMenu={(e) => e.preventDefault()}
      className="overflow-auto w-full h-full"
       style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    />
  );
};
