document.getElementById('cv-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;
  const certificates = document.getElementById('certificates').value;

  // Show the "Download PDF" button
  document.getElementById('output').classList.remove('hidden');

  // Store the form data for PDF generation
  const userData = {
    name,
    contact,
    experience,
    education,
    skills,
    certificates
  };

  // Generate PDF when user clicks the "Download PDF" button
  document.getElementById('download-pdf').addEventListener('click', function() {
    generatePDF(userData);
  });
});

function generatePDF(data) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Set up document for A4 size
  doc.setFont("Helvetica");
  doc.setFontSize(14);

  // Starting Y position
  let yPosition = 20;

  // Title and name with formatting
  doc.setFontSize(20);
  doc.setTextColor(0, 51, 102); // Dark blue color
  doc.text("Curriculum Vitae", 105, yPosition, null, null, "center");
  yPosition += 15;

  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0); // Black text color
  doc.text(data.name, 105, yPosition, null, null, "center");
  yPosition += 20;

  // Contact Info Section
  doc.setFontSize(16);
  doc.setTextColor(0, 51, 102);
  doc.text("Contact", 20, yPosition);
  yPosition += 10;
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text(data.contact, 20, yPosition);
  yPosition += 15; // Add space after contact info

  // Experience Section
  doc.setFontSize(16);
  doc.setTextColor(0, 51, 102);
  doc.text("Experience", 20, yPosition);
  yPosition += 10;
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  let experienceText = data.experience;
  doc.text(experienceText, 20, yPosition);
  yPosition += 15 + (experienceText.split("\n").length * 10); // Account for multiple lines in experience

  // Education Section
  doc.setFontSize(16);
  doc.setTextColor(0, 51, 102);
  doc.text("Education", 20, yPosition);
  yPosition += 10;
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  let educationText = data.education;
  doc.text(educationText, 20, yPosition);
  yPosition += 15 + (educationText.split("\n").length * 10); // Account for multiple lines in education

  // Skills Section
  doc.setFontSize(16);
  doc.setTextColor(0, 51, 102);
  doc.text("Skills", 20, yPosition);
  yPosition += 10;
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  let skillsText = data.skills;
  doc.text(skillsText, 20, yPosition);
  yPosition += 15 + (skillsText.split("\n").length * 10); // Account for multiple lines in skills

  // Certificates Section
  doc.setFontSize(16);
  doc.setTextColor(0, 51, 102);
  doc.text("Certificates", 20, yPosition);
  yPosition += 10;
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  let certificatesText = data.certificates;
  doc.text(certificatesText, 20, yPosition);
  yPosition += 15 + (certificatesText.split("\n").length * 10); // Account for multiple lines in certificates

  // Final touches (add page numbers or adjust margin if needed)
  doc.setFontSize(10);
  doc.text("Page 1", 200, 290);

  // Save the PDF
  doc.save("resume.pdf");
}
