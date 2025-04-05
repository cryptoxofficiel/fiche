// Bibliothèque jsPDF pour générer le PDF
const { jsPDF } = window.jspdf;

// Écouter la soumission du formulaire
document.getElementById('pay-slip-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Récupérer les données du formulaire
    const employeeName = document.getElementById('employeeName').value;
    const grossSalary = parseFloat(document.getElementById('grossSalary').value);
    const contractType = document.getElementById('contractType').value;

    // Calculer les déductions conformes aux lois françaises
    const socialContributions = grossSalary * 0.22; // Exemple : 22% pour les cotisations sociales
    const incomeTax = grossSalary * 0.10; // Exemple : 10% pour l'impôt sur le revenu
    const netSalary = grossSalary - socialContributions - incomeTax;

    // Afficher la fiche de paie
    const outputDiv = document.getElementById('pay-slip-output');
    outputDiv.innerHTML = `
        <h3>Fiche de Paie pour ${employeeName}</h3>
        <p>Type de contrat : ${contractType}</p>
        <p>Salaire brut : ${grossSalary.toFixed(2)} €</p>
        <p>Cotisations sociales : ${socialContributions.toFixed(2)} €</p>
        <p>Impôt sur le revenu : ${incomeTax.toFixed(2)} €</p>
        <p><strong>Salaire net : ${netSalary.toFixed(2)} €</strong></p>
    `;

    // Activer le bouton de téléchargement
    document.getElementById('download-pdf').style.display = 'block';
});

// Télécharger la fiche de paie en PDF
document.getElementById('download-pdf').addEventListener('click', function () {
    const doc = new jsPDF();

    // Ajouter le contenu au PDF
    doc.setFontSize(18);
    doc.text("Fiche de Paie - Fihe-Pay", 10, 10);

    doc.setFontSize(12);
    doc.text(`Nom : ${document.getElementById('employeeName').value}`, 10, 20);
    doc.text(`Salaire Brut : ${document.getElementById('grossSalary').value} €`, 10, 30);
    doc.text(`Cotisations Sociales : ${(parseFloat(document.getElementById('grossSalary').value) * 0.22).toFixed(2)} €`, 10, 40);
    doc.text(`Impôt sur le Revenu : ${(parseFloat(document.getElementById('grossSalary').value) * 0.10).toFixed(2)} €`, 10, 50);
    doc.text(`Salaire Net : ${(parseFloat(document.getElementById('grossSalary').value) * 0.68).toFixed(2)} €`, 10, 60);

    // Sauvegarder le PDF
    doc.save("fiche-de-paie.pdf");
});