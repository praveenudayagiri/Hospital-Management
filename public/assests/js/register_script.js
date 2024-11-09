function showDynamicFields() {
    const userType = document.getElementById("userType").value;
    const dynamicFields = document.getElementById("dynamicFields");
  
    let fieldsHTML = '';
  
    if (userType === "doctor") {
      fieldsHTML = `
              <div class="input-group">
                <label for="userName">Username(Department):</label>
                <input type="text" id="userName" name="userName" placeholder="Eg: Vamsi(Cardiology)" required>
              </div>
          <div class="input-group">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter first name" required>
          </div>
          <div class="input-group">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter last name" required>
          </div>
          <div class="input-group">
            <label for="gender">Gender:</label>
            <select id="gender" name="gender" required>
              <option value="">-- Select Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="input-group">
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" placeholder="Enter age" required>
          </div>
          <div class="input-group">
            <label for="contact">Contact:</label>
            <input type="text" id="contact" name="contact" placeholder="Enter contact number" required>
          </div>
          <div class="input-group">
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" placeholder="Enter address" required>
          </div>
        `;
    } else if (userType === "patient") {
      fieldsHTML = `
        <div class="input-group">
                <label for="userName">Username:</label>
                <input type="text" id="userName" name="userName" placeholder="Enter the username" required>
        </div>
        <div class="input-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter first name" required>
        </div>
        <div class="input-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter last name" required>
        </div>
        <div class="input-group">
          <label for="gender">Gender:</label>
          <select id="gender" name="gender" required>
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="input-group">
          <label for="age">Age:</label>
          <input type="number" id="age" name="age" placeholder="Enter age" required>
        </div>
        <div class="input-group">
          <label for="contact">Contact:</label>
          <input type="text" id="contact" name="contact" placeholder="Enter contact number" required>
        </div>
        <div class="input-group">
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" placeholder="Enter address" required>
        </div>
      `;
    } else if (userType === "admin") {
      fieldsHTML = `
        <div class="input-group">
          <label for="userName">Username:</label>
          <input type="text" id="userName" name="userName" placeholder="Enter the username" required>
        </div>
        <div class="input-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter first name" required>
        </div>
        <div class="input-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter last name" required>
        </div>
        <div class="input-group">
          <label for="age">Age:</label>
          <input type="number" id="age" name="age" placeholder="Enter age" required>
        </div>
        <div class="input-group">
          <label for="gender">Gender:</label>
          <select id="gender" name="gender" required>
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="input-group">
          <label for="contact">Contact:</label>
          <input type="text" id="contact" name="contact" placeholder="Enter contact number" required>
        </div>
        <div class="input-group">
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" placeholder="Enter address" required>
        </div>
      `;
    }
  
    dynamicFields.innerHTML = fieldsHTML;
  }
  
  async function submitRegistration(event) {
    event.preventDefault();
    const errorMessageElement = document.getElementById('errorMessageElement');
    errorMessageElement.style.display = 'none'; // Hide error message initially
  
    const userType = document.getElementById("userType").value;
    const userName = document.getElementById("userName").value;
    const emailId = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName") ? document.getElementById("firstName").value : '';
    const lastName = document.getElementById("lastName") ? document.getElementById("lastName").value : '';
    const gender = document.getElementById("gender") ? document.getElementById("gender").value : '';
    const age = document.getElementById("age") ? document.getElementById("age").value : '';
    const contact = document.getElementById("contact") ? document.getElementById("contact").value : '';
    const address = document.getElementById("address") ? document.getElementById("address").value : '';
  
    // You can perform form validation here if needed
  
  
    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userType,
              userName,
              emailId,
              password,
              firstName,
              lastName,
              gender,
              age,
              contact,
              address
            })
          });

        const data = await response.json();

        if (response.ok) {
            console.log(data);
            console.log(userType);
            if (userType === 'admin') {
                window.location.href = 'roombooking';
            } 
            else if( userType === 'patient') {
                window.location.href = 'appointment';
            }
            else {
                window.location.href = 'mypatients';
            }
            console.log(data);
        } else {
            errorMessageElement.textContent = data.message || 'Invalid login credentials. Please try again.';
            errorMessageElement.style.display = 'block';
        }
    } catch (error) {
        errorMessageElement.textContent = 'An error occurred while processing your request. Please try again later.';
        errorMessageElement.style.display = 'block';
    }
  }
  