# Enhanced Calculator Microservice

This project is an **enhanced calculator microservice** built using **Node.js and Express**. It provides additional arithmetic operations beyond the basic ones, along with improved error handling and logging using **Winston**.

---

## **Features**
- Supports advanced arithmetic operations:
  - **Addition** (`/add?num1=10&num2=5` → `10 + 5 = 15`)
  - **Subtraction** (`/subtract?num1=10&num2=5` → `10 - 5 = 5`)
  - **Multiplication** (`/multiply?num1=10&num2=5` → `10 × 5 = 50`)
  - **Division** (`/divide?num1=10&num2=5` → `10 ÷ 5 = 2`)
  - **Exponentiation** (`/power?num1=2&num2=3` → `2^3 = 8`)
  - **Square Root** (`/sqrt?num1=16` → `√16 = 4`)
  - **Modulo** (`/modulo?num1=10&num2=3` → `10 % 3 = 1`)
- Implements **logging** for request tracking and error handling.
- Handles **invalid input errors** and provides meaningful responses.

---

## **1️⃣ Prerequisites**
Make sure you have the following installed:
- **Node.js** ([Download](https://nodejs.org/en/download/))
- **Git** ([Download](https://git-scm.com/downloads))
- **Visual Studio Code (VS Code)** ([Download](https://code.visualstudio.com/))

---

## **2️⃣ Installation & Setup**

### **Step 1: Clone the Repository**
```sh
git clone https://github.com/Abhishek-S-28/sit737-2025-prac4c.git
cd sit737-2025-prac4c
```

### **Step 2: Install Dependencies**
```sh
npm install
```

### **Step 3: Start the Microservice**
```sh
node calculator.js
```

The microservice will now run on `http://localhost:3000`.

---

## **3️⃣ API Usage**
### **Available Endpoints**

| Operation       | Example Request |
|---------------|----------------------------|
| **Addition**     | [http://localhost:3000/add?num1=10&num2=5](http://localhost:3000/add?num1=10&num2=5) |
| **Subtraction**  | [http://localhost:3000/subtract?num1=10&num2=5](http://localhost:3000/subtract?num1=10&num2=5) |
| **Multiplication** | [http://localhost:3000/multiply?num1=10&num2=5](http://localhost:3000/multiply?num1=10&num2=5) |
| **Division**      | [http://localhost:3000/divide?num1=10&num2=5](http://localhost:3000/divide?num1=10&num2=5) |
| **Exponentiation** | [http://localhost:3000/power?num1=2&num2=3](http://localhost:3000/power?num1=2&num2=3) |
| **Square Root** | [http://localhost:3000/sqrt?num1=16](http://localhost:3000/sqrt?num1=16) |
| **Modulo**      | [http://localhost:3000/modulo?num1=10&num2=3](http://localhost:3000/modulo?num1=10&num2=3) |

### **Example API Request**
**GET Request:**
```sh
http://localhost:3000/add?num1=10&num2=5
```

**Response:**
```json
{
  "operation": "add",
  "num1": 10,
  "num2": 5,
  "result": 15
}
```

---

## **4️⃣ Error Handling**
- If **num1 or num2** is missing or not a number:
  ```json
  { "error": "Invalid input. Please provide valid numbers." }
  ```
- If **division by zero** is attempted:
  ```json
  { "error": "Error: Division by zero" }
  ```
- If **square root of a negative number** is attempted:
  ```json
  { "error": "Error: Square root of negative number" }
  ```

---

## **5️⃣ Logging**
Logging is implemented using **Winston**.

### **Log Files**
- `logs/combined.log` → Logs all API requests.
- `logs/error.log` → Logs only error messages.

### **View Logs in Real-time**
```sh
tail -f logs/combined.log
```

---

## **6️⃣ Updating Code in the Future**
For any **future changes**, use:
```sh
git add .
git commit -m "Updated features or bug fixes"
git push origin main
```

---

## **7️⃣ Author**
**Abhishek S**

This project is created for **SIT737 - Cloud Native Application Development**.

