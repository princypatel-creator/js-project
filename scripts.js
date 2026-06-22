  // Load the data automatically when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', loadFormData);


  // --- 1. DEFINING ALL FIELDS SEPARATELY ---
const txtFields = {
    'name': document.getElementById('name'),
    'fatherSpouse': document.getElementById('fatherSpouse'),
    'address': document.getElementById('address'),
    'visitDate': document.getElementById('visitDate'),
    'age': document.getElementById('age'),
    'mobile': document.getElementById('mobile'),
    'validTill': document.getElementById('validTill'),
    'remark': document.getElementById('remark')
};

const selectFields = {
    'entryType': document.getElementById('entryType'),
    'occupation': document.getElementById('occupation'),
    'identityProof': document.getElementById('identityProof'),
    'purpose': document.getElementById('purpose'),
    'branchName': document.getElementById('branchName')
};

// --- 2. FUNCTION: SAVE DATA ---
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

// --- 3. FUNCTION: LOAD DATA ---
function loadFormData() {
    // Load Text and Date Inputs
    for (const key in txtFields) {
        if (txtFields[key]) {
            const savedValue = localStorage.getItem(key);
            if (savedValue !== null) {
                txtFields[key].value = savedValue;
            }
        }
    }

    // Load Select Dropdowns
    for (const key in selectFields) {
        if (selectFields[key]) {
            const savedValue = localStorage.getItem(key);
            if (savedValue !== null) {
                selectFields[key].value = savedValue;
            }
        }
    }

    // Load Gender Radio Buttons
    const savedGender = localStorage.getItem('gender');
    if (savedGender) {
        // Find the radio button that matches the saved value (e.g., "Male", "Female", "Both")
        const genderRadio = document.querySelector(`input[name="gender"][value="${savedGender}"]`);
        if (genderRadio) {
            genderRadio.checked = true;
        }
    }
}

// --- 4. FUNCTION: DELETE DATA ---
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

// --- 5. EVENT LISTENERS ---
document.getElementById('saveBtn').addEventListener('click', function(e) {
    e.preventDefault(); 
    saveFormData();
});

document.getElementById('deleteBtn').addEventListener('click', function(e) {
    e.preventDefault();
    deleteFormData();
});

