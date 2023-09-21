// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method should be POST' });
  } else {
    try {
      // Destructure the "body" property from the request object
      const { body } = req;
      const url = 'https://api.openai.com/v1/chat/completions';
      // Define the headers for the HTTP request
      const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      };

      // Send an HTTP POST request to the OpenAI API
      const response = await axios.post(url, body, { headers: headers })
      // Set a 200 (OK) status and return the response data from the OpenAI API
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
