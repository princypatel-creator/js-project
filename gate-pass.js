  // Load the data automatically when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', function () {
    resetForm();
    renderGatePassBox();
});


  // ---  DEFINING ALL  INPUT FIELDS  ---
const txtFields = {
    'name': document.getElementById('names'),
    'fathername': document.getElementById('fathername'),
    'add': document.getElementById('add'),
    'visitDate': document.getElementById('visitdate'),
    'age': document.getElementById('age'),
    'phone': document.getElementById('phone'),
    'validTill': document.getElementById('validdate'),
    'remark': document.getElementById('remark')
};
// --- DEFINING ALL THE DROPDOWN FIELDS ---
const selectFields = {
    'entryType': document.getElementById('pass'),
    'occupation': document.getElementById('occupy'),
    'identityProof': document.getElementById('proof'),
    'purpose': document.getElementById('visit'),
    'branchName': document.getElementById('branch')
};

// ---  FUNCTION: SAVE DATA ---
function saveFormData() {
    // Save Text and Date Inputs
    for (const key in txtFields) {
        if (txtFields[key]) {
            localStorage.setItem(key, txtFields[key].value);
        }
    }

    // Save Select Dropdowns
    for (const key in selectFields) {
        if (selectFields[key]) {
            localStorage.setItem(key, selectFields[key].value);
        }
    }

    // Save Gender Radio Buttons
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    if (selectedGender) {
        localStorage.setItem('gender', selectedGender.value);
    } else {
        localStorage.setItem('gender', ''); // Store empty if nothing is selected
    }

    alert('All individual fields saved to local storage successfully!');
}

// ---  FUNCTION: RESET FORM ---
function resetForm() {
    for (const key in txtFields) {
        if (txtFields[key]) {
            const field = txtFields[key];
            if (!field.readOnly) {
                field.value = '';
            }
        }
    }

    for (const key in selectFields) {
        if (selectFields[key]) {
            selectFields[key].selectedIndex = 0;
        }
    }

    const checkedGender = document.querySelector('input[name="gender"]:checked');
    if (checkedGender) {
        checkedGender.checked = false;
    }
}
//--- function to return the saved data of the users in the box ---
function renderGatePassBox() {
    const box = document.querySelector('.box');
    if (!box) return;

    const keys = [
        { label: 'Name', key: 'name' },
        { label: 'Father/Spouse Name', key: 'fathername' },
        { label: 'Address', key: 'add' },
        { label: 'Visit Date', key: 'visitDate' },
        { label: 'Age', key: 'age' },
        { label: 'Phone', key: 'phone' },
        { label: 'Valid Till', key: 'validTill' },
        { label: 'Remark', key: 'remark' },
        { label: 'Entry Type', key: 'entryType' },
        { label: 'Occupation', key: 'occupation' },
        { label: 'Identity Proof', key: 'identityProof' },
        { label: 'Purpose', key: 'purpose' },
        { label: 'Branch Name', key: 'branchName' },
        { label: 'Gender', key: 'gender' }
    ];

    const savedData = keys.map(({ label, key }) => {
        const value = localStorage.getItem(key);
        return value ? `<p><strong>${label}:</strong> ${value}</p>` : '';
    }).filter(Boolean).join('');

    box.innerHTML = savedData || '<p>No saved gate pass data available.</p>';
}

// ---  FUNCTION: DELETE DATA ---
function deleteFormData() {
    if (confirm('Are you sure you want to delete all saved entries?')) {
        
        // Delete individual keys from localStorage & clear text fields
        for (const key in txtFields) {
            localStorage.removeItem(key);
            if (txtFields[key]) txtFields[key].value = '';
        }

        // Delete individual keys from localStorage & reset select dropdowns
        for (const key in selectFields) {
            localStorage.removeItem(key);
            if (selectFields[key]) selectFields[key].selectedIndex = 0; // Resets to the first option (e.g., "Choose an option...")
        }

        // Delete gender key & uncheck radio buttons
        localStorage.removeItem('gender');
        const checkedGender = document.querySelector('input[name="gender"]:checked');
        if (checkedGender) {
            checkedGender.checked = false;
        }

        alert('All individual local storage entries deleted.');
    }
}

// --- . EVENT LISTENERS  FOR MY BUTTONS---

document.querySelector('form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    saveFormData();
});

document.querySelector('.delete-data')?.addEventListener('click', function (e) {
    e.preventDefault();
    deleteFormData();
});
