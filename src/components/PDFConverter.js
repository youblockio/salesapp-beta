import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function PdfExporter() {
  const exportPdf = () => {
    const pdf = new jsPDF({ compress: true });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const sections = document.querySelectorAll(".section"); // Get all the sections

    pdf.setFont("helvetica", "", "StandardEncoding"); // Use Standard Encoding for text compression

    // Loop through each section and add it to a new page in the PDF
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const htmlContent = section.innerHTML.trim(); // Trim the HTML content
      const sectionHeight = section.offsetHeight;
      html2canvas(section, {
        logging: true,
        letterRendering: 1,
        useCORS: true,
        scrollY: -window.scrollY,
        dpi: 300,
      }).then((canvas) => {
        const imgWidth = pageWidth;
        const imgHeight = (sectionHeight * imgWidth) / canvas.width;
        const imgData = canvas.toDataURL("image/png", 0.5); // Use a quality of 0.5 (50%)
        const pageData = canvas.toDataURL("image/jpeg", 1.0);
        pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        if (i < sections.length - 1) {
          pdf.addPage();
        } else {
          pdf.save("document.pdf");
        }
      });
    }
  };

  return (
    <div>
      <div className="section">
        <h1>Section 1</h1>
        <p>Content for section 1 goes here.</p>
      </div>
      <div className="section">
        <h1>Section 2</h1>
        <p>Content for section 2 goes here.</p>
      </div>
      <div className="section">
        <h1>Section 3</h1>
        <p>Content for section 3 goes here.</p>
      </div>
      <button onClick={exportPdf}>Export PDF</button>
    </div>
  );
}

export default PdfExporter;


// const addSectionToPdf = (section) => {
//   return new Promise((resolve, reject) => {
//     const htmlContent = section.innerHTML.trim(); // Trim the HTML content
//     const sectionHeight = section.offsetHeight;
//     html2canvas(section, {
//       logging: true,
//       letterRendering: 1,
//       useCORS: true,
//       scrollY: -window.scrollY,
//       dpi: 300,
//     }).then((canvas) => {
//       const imgWidth = pageWidth;
//       const imgHeight = (sectionHeight * imgWidth) / canvas.width;
//       const imgData = canvas.toDataURL("image/png", 0.5); // Use a quality of 0.5 (50%)
//       const pageData = canvas.toDataURL("image/jpeg", 1.0);
//       const scale = pageWidth / canvas.width; // Set a fixed scale value
//       pdf.addImage(pageData, "PNG", 0, 0, 211, 298, null, null, null, null, null, { scale });
//       resolve();
//     });
//   });
// };
