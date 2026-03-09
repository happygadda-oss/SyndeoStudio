// ================================
// Syndeo Studio - Backend Server
// Node.js + Express
// ================================

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Routes - Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// API Route - Contact Form Submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email format'
        });
    }
    
    // Log the form submission (In production, you would:
    // 1. Store in a database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Add to email marketing list)
    console.log('=== New Contact Form Submission ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('===================================');
    
    // Simulate async operation (database save, email send, etc.)
    setTimeout(() => {
        res.status(200).json({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.'
        });
    }, 500);
    
    /*
    // Example: Send email using nodemailer (uncomment and configure)
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-app-password'
        }
    });
    
    const mailOptions = {
        from: email,
        to: 'hello@syndeostudio.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email error:', error);
            return res.status(500).json({
                success: false,
                message: 'Failed to send message'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Message sent successfully!'
        });
    });
    */
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Page Not Found | Syndeo Studio</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: 'Inter', sans-serif;
                    background: #0a0a0f;
                    color: #f8f9fa;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    text-align: center;
                    padding: 2rem;
                }
                .container {
                    max-width: 600px;
                }
                h1 {
                    font-size: 8rem;
                    background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 1rem;
                }
                h2 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }
                p {
                    color: #64748b;
                    margin-bottom: 2rem;
                }
                a {
                    display: inline-block;
                    background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 0.5rem;
                    text-decoration: none;
                    font-weight: 600;
                }
                a:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you're looking for doesn't exist or has been moved.</p>
                <a href="/">Return Home</a>
            </div>
        </body>
        </html>
    `);
});

// Start Server
app.listen(PORT, () => {
    console.log('=================================');
    console.log('🚀 Syndeo Studio Server Running');
    console.log(`📍 http://localhost:${PORT}`);
    console.log('=================================');
    console.log('Available Pages:');
    console.log(`   Home:      http://localhost:${PORT}/`);
    console.log(`   About:     http://localhost:${PORT}/about`);
    console.log(`   Services:  http://localhost:${PORT}/services`);
    console.log(`   Portfolio: http://localhost:${PORT}/portfolio`);
    console.log(`   Contact:   http://localhost:${PORT}/contact`);
    console.log('=================================');
});

// Graceful Shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
    });
});
