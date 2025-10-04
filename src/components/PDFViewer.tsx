import { useEffect, useRef } from "react";
import "pdfjs-dist/web/pdf_viewer.css";


import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export const PDFViewer = ({ file }) => {
  const containerRef = useRef(null);

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
    loadPDF();
  }, [file]);

  return (
    <div
      ref={containerRef}
      onContextMenu={(e) => e.preventDefault()}
      className="select-none overflow-auto"
      style={{ width: "100%", height: "80vh" }}
    />
  );
};
