import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    address1: "",
    address2: "",
    city: "",
    state: "Normal",
    zip_code: "",
    phone: "",
    email: "",
    membership: "Gold",
    terms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setData((data) => ({
      ...data,
      [name]: type == "checkbox" ? checked : value,
    }));
  };

  const [terms, setTerm] = useState([]);
  const handlTerms = (e) => {
    !terms.includes(e.target.checked)
      ? setTerm([...terms, e.target.checked])
      : setTerm([...terms.filter((items) => items !== e.target.checked)]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Info formulaire :", data,terms);
    alert("Success!");
  };

  return (
    <main className="page-shell">
      <style>{`
        /* ========================================== */
        /* 1. CONFIGURATION GLOBALE & RESET           */
        /* ========================================== */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          color: #2c3e50;
          background: #f0f4f8;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* ========================================== */
        /* 2. LAYOUT PRINCIPAL (CONTENEUR)            */
        /* ========================================== */
        .page-shell {
          min-height: 100vh;
          padding: 40px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* ========================================== */
        /* 3. CARTE DU FORMULAIRE                     */
        /* ========================================== */
        .form-card {
          width: 100%;
          max-width: 680px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          border: 1px solid #e1e8ed;
        }

        /* ========================================== */
        /* 4. EN-TÊTE (HEADER)                        */
        /* ========================================== */
        .form-header {
          background: linear-gradient(135deg, #4a6fa5, #2c3e50);
          color: #ffffff;
          padding: 25px 30px;
          text-align: center;
        }

        .form-header h1 {
          font-size: 26px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* ========================================== */
        /* 5. CORPS DU FORMULAIRE & CHAMPS            */
        /* ========================================== */
        form {
          padding: 30px;
        }

        .field-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .field.full {
          width: 100%;
          margin-bottom: 20px;
        }

        label {
          font-weight: 600;
          font-size: 13px;
          color: #4a5568;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .required {
          color: #e53e3e;
        }

        input, select {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #cbd5e0;
          border-radius: 6px;
          font-size: 14px;
          color: #2d3748;
          background-color: #fff;
          transition: all 0.3s ease;
          outline: none;
        }

        input:focus, select:focus {
          border-color: #4a6fa5;
          box-shadow: 0 0 0 3px rgba(74, 111, 165, 0.15);
        }

        input::placeholder {
          color: #a0aec0;
        }

        /* ========================================== */
        /* 6. SECTION MEMBERSHIP (RADIO BUTTONS)      */
        /* ========================================== */
        .membership-section {
          margin: 25px 0;
          padding: 20px;
          background: #f7fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .membership-title {
          font-weight: 600;
          font-size: 14px;
          color: #2d3748;
          margin-bottom: 12px;
        }

        .radio-group {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
        }

        .radio-label {
          font-weight: normal;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
          color: #4a5568;
        }

        .radio-label input[type="radio"] {
          width: 18px;
          height: 18px;
          accent-color: #4a6fa5;
          cursor: pointer;
        }

        /* ========================================== */
        /* 7. GROUPES DE CHECKBOXES                   */
        /* ========================================== */
        .checkbox-group {
          margin: 25px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .checkbox-group input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #4a6fa5;
          cursor: pointer;
        }

        /* ========================================== */
        /* 8. BOUTON DE SOUMISSION                    */
        /* ========================================== */
        .submit-btn {
          width: 100%;
          background: #4a6fa5;
          color: #ffffff;
          border: none;
          padding: 14px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.1s ease;
          letter-spacing: 0.5px;
          margin-top: 10px;
        }

        .submit-btn:hover {
          background: #3b5983;
        }

        .submit-btn:active {
          transform: scale(0.98);
        }
      `}</style>

      <section className="form-card">
        <header className="form-header">
          <h1>Membership Registration</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label>
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                value={data.first_name.toUpperCase()}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>
                Last Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                value={data.last_name.toUpperCase()}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field full">
            <label>
              Street Address <span className="required">*</span>
            </label>
            <input
              type="text"
              name="address1"
              value={data.address1}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field full">
            <label>Address Line 2</label>
            <input
              type="text"
              name="address2"
              value={data.address2}
              onChange={handleChange}
            />
          </div>

          <div className="field-row">
            <div className="field">
              <label>
                City <span className="required">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={data.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>
                State <span className="required">*</span>
              </label>
              <select
                name="state"
                value={data.state}
                onChange={handleChange}
                required
              >
                {[
                  "Normal",
                  "Active",
                  "Inactive",
                  "Pending",
                  "Blocked",
                  "Suspended",
                  "VIP",
                  "Premium",
                ].map((em, i) => (
                  <option key={i} value={em}>
                    {em}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label>Zip Code *</label>
              <input
                type="text"
                name="zip_code"
                value={data.zip_code}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="(___)___-____"
                value={data.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field full">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="membership-section">
            <p className="membership-title">Choose your membership level *</p>
            <div className="radio-group">
              {["Bronze", "Silver", "Gold", "Platinum"].map((level) => (
                <label className="radio-label" key={level}>
                  <input
                    type="radio"
                    name="membership"
                    value={level}
                    checked={data.membership === level}
                    onChange={handleChange}
                  />
                  {level}
                </label>
              ))}
            </div>
          </div>

          <div className="checkbox-group">
            <label className="radio-label">
              <input
                type="checkbox"
                name="terms"
                checked={data.terms}
                onChange={handleChange}
                required
              />
              Terms and Conditions <span className="required">*</span>
            </label>

            <label className="radio-label">
              <input
                type="checkbox"
                checked={terms.includes(true)}
                name="Terms"
                onChange={(e) => handlTerms(e)}
              />
              Extra Subscription / Notifications
            </label>
          </div>

          <button className="submit-btn" type="submit">
            Confirm Registration
          </button>
        </form>
      </section>
    </main>
  );
}
