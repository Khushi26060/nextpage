// pages/api/submit.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const data = req.body;
        // Process the form data (e.g., save to database, send email)
        console.log('Form submission data:', data);
  
        // Example response
        res.status(200).json({ message: 'Form submitted successfully!' });
      } catch (error) {
        console.error('Error processing form submission:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  