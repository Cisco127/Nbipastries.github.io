/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

header {
    background: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
}

header nav a {
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
    transition: color 0.3s ease;
}

header nav a:hover {
    color: #ff6347; /* Change color on hover */
}

/* Section Styles */
section {
    padding: 2rem;
    text-align: center;
}

section h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
}

/* Menu Styles */
.menu-item {
    display: inline-block;
    margin: 1rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-item img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.menu-item img:hover {
    transform: scale(1.1); /* Zoom in on hover */
}

.menu-item:hover {
    transform: translateY(-5px); /* Slight lift effect */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.menu-item h3 {
    margin: 0.5rem 0;
}

.menu-item p {
    font-weight: bold;
    color: #555;
}

/* Button Styles */
button {
    background: #333;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
}

button:hover {
    background: #ff6347; /* Change background color on hover */
    transform: scale(1.1); /* Slight zoom effect */
}

/* Form Styles */
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

form input, form textarea, form button {
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;
}

form input:focus, form textarea:focus {
    border-color: #ff6347; /* Highlight input when focused */
    outline: none;
}

/* Footer Styles */
footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
    position: relative;
    bottom: 0;
    width: 100%;
}

/* Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

section {
    animation: fadeIn 1.5s ease-in-out;
}
