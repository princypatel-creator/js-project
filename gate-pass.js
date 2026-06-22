// gate-pass.js

function getSaved(key) {
  return localStorage.getItem(key) ?? '';
}

function buildLine(label, value) {
  const safeValue = String(value ?? '').trim();
  return safeValue ? `<div><b>${label}:</b> ${safeValue}</div>` : `<div><b>${label}:</b> —</div>`;
}

function renderGatePass() {
  const box = document.querySelector('.box');
  if (!box) return;

  const entry = {
    name: getSaved('name'),
    fathername: getSaved('fathername'),
    phone: getSaved('phone'),
    entryType: getSaved('entryType'),
    add: getSaved('add'),
    validTill: getSaved('validTill'),
    occupy: getSaved('occupation'),
    remark: getSaved('remark'),
    identityProof: getSaved('identityProof'),
    purpose: getSaved('purpose'),
    visitDate: getSaved('visitDate'),
    branchName: getSaved('branchName'),
    age: getSaved('age'),
    gender: getSaved('gender')
  };

  // If nothing is stored yet
  if (!entry.name && !entry.fathername && !entry.phone) {
    box.innerHTML = `<h2>Gate Pass</h2><div>No saved data found. Go back to the form and click Save.</div>`;
    return;
  }

  box.innerHTML = `
    <h2 style="margin-top:0">GATE PASS</h2>
    ${buildLine('Name', entry.name)}
    ${buildLine('Father/Spouse Name', entry.fathername)}
    ${buildLine('Mobile No.', entry.phone)}
    ${buildLine('Entry Type', entry.entryType)}
    ${buildLine('Address', entry.add)}
    ${buildLine('Valid Till', entry.validTill)}
    ${buildLine('Occupation', entry.occupy)}
    ${buildLine('Identity Proof', entry.identityProof)}
    ${buildLine('Purpose of Visit', entry.purpose)}
    ${buildLine('Visit Date', entry.visitDate)}
    ${buildLine('Branch Name', entry.branchName)}
    ${buildLine('Age', entry.age)}
    ${buildLine('Gender', entry.gender)}
    ${buildLine('Remark', entry.remark)}
  `;
}

window.addEventListener('DOMContentLoaded', renderGatePass);

