function saveContact() {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Sai Kumar Dara
ORG:FYNDOM
TITLE:Founder & CEO
TEL:+917674843434
EMAIL:contact@fyndom.in
URL:https://fyndom.in
END:VCARD
`;

  const blob = new Blob([vCard], { type: "text/vcard" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Sai-Kumar-Dara-FYNDOM.vcf";
  link.click();
}
