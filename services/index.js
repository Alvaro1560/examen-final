const express = require('express');
const amqp = require('amqplib/callback_api');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Configura RabbitMQ con usuario y contraseña
const rabbitMQUrl = 'amqp://admin:admin@20.0.105.216:5672';

app.post('/send-to-rabbitmq', (req, res) => {


  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  amqp.connect(rabbitMQUrl, (err, conn) => {
    if (err) {
      return res.status(500).json({ error: 'Error connecting to RabbitMQ' });
    }

    conn.createChannel((err, ch) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating channel' });
      }

      const queue = 'foods';
      ch.assertQueue(queue, { durable: true });
      ch.sendToQueue(queue, Buffer.from(message));

      res.status(200).json({ success: 'Message sent to RabbitMQ' });

      conn.close(); // Cierra la conexión después de enviar el mensaje
    });
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
