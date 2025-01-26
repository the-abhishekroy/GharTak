# Ghar Tak Service Website

## Overview

**Ghar Tak** is a service-based website designed to connect users with local service providers for various needs, ranging from home cleaning and plumbing to beauty and wellness services. The website provides an intuitive interface for users to browse, book, and manage services conveniently.

## Features

- **User Authentication**: Secure user registration and login functionality.
- **Service Listing**: A comprehensive catalog of services with detailed descriptions.
- **Booking System**: Seamless booking process for scheduling services.
- **Payment Gateway Integration**: Secure online payment options for hassle-free transactions.
- **Responsive Design**: Fully optimized for both desktop and mobile browsers.
- **Admin Dashboard**: Manage services, users, and bookings effectively.
- **Ratings & Reviews**: Users can leave feedback and rate services.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: Razorpay
- **Version Control**: Git and GitHub

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/the-abhishekroy/GharTak.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd GharTak
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Set Environment Variables**:

   - Create a `.env` file in the root directory and add the following variables:
     ```env
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     PAYMENT_API_KEY=your_payment_gateway_key
     ```

5. **Run the Application**:

   ```bash
   npm run dev
   ```

6. **Access the Website**:

   - The website will be available at `http://localhost:5000`.

## File Structure

```
GharTak
├── public
├── src
│   ├── components
│   ├── pages
│   ├── styles
│   └── App.js
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
```

- **public/**: Contains public assets such as images.
- **src/**: Contains React components, pages, and styles.


## Future Enhancements

- Implement real-time chat between users and service providers.
- Add advanced search and filtering for services.
- Expand analytics and reporting tools for administrators.
- Enable multilingual support for wider accessibility.

## Contributing

We welcome contributions to improve **Ghar Tak**. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- **Author**: Abhishek Roy
- **GitHub**: [the-abhishekroy](https://github.com/the-abhishekroy)
- **Email**: the.abhishekkroy@gmail.com

---

Feel free to open an issue or contact me for suggestions and feedback!

