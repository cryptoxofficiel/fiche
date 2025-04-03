import html2pdf from "html2pdf.js";

const form = document.getElementById("payroll-form");
const ficheContainer = document.getElementById("fiche-container");
const fiche = document.getElementById("fiche");
const downloadBtn = document.getElementById("download-pdf");
const exportable = document.getElementById("exportable");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const poste = document.getElementById("poste").value;
  const salaireBrut = parseFloat(document.getElementById("salaireBrut").value);
  const heures = parseFloat(document.getElementById("heures").value);
  const mois = document.getElementById("mois").value;

  const cotisations = salaireBrut * 0.22;
  const salaireNet = salaireBrut - cotisations;
  const date = new Date(mois + "-01");
  const moisTexte = date.toLocaleString("fr-FR", { month: "long", year: "numeric" });

  fiche.innerHTML = `
    <p><strong>Nom :</strong> ${nom}</p>
    <p><strong>Poste :</strong> ${poste}</p>
    <p><strong>Mois :</strong> ${moisTexte}</p>
    <p><strong>Salaire Brut :</strong> ${salaireBrut.toFixed(2)} €</p>
    <p><strong>Heures Travaillées :</strong> ${heures} h</p>
    <p><strong>Cotisations Sociales :</strong> ${cotisations.toFixed(2)} €</p>
    <p><strong>Salaire Net :</strong> ${salaireNet.toFixed(2)} €</p>
  `;

  ficheContainer.classList.remove("hidden");

  // Déclencher automatiquement le téléchargement du PDF
  setTimeout(() => {
    const opt = {
      margin: 0.5,
      filename: 'fiche-de-paie.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(exportable).save();
  }, 300); // petit délai pour assurer le rendu DOM
});