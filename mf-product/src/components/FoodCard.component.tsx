import React, { CSSProperties } from 'react';

const FoodCard = ({ image, name, description, price }) => {
  const sendToRabbitMQ = async () => {
    try {
      const response = await fetch('http://localhost:3000/send-to-rabbitmq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: `Food Card: ${name}, Price: ${price}` }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Message sent to RabbitMQ:', result);
      } else {
        console.error('Error sending message:', result.error);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3 style={styles.title}>{name}</h3>
      <p style={styles.description}>{description}</p>
      <p style={styles.price}>${price}</p>
      <button onClick={sendToRabbitMQ} style={styles.button}>Enviar a Rabbit</button>
    </div>
  );
};

const styles: { card, image, title, description, price, button: CSSProperties } = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    width: '250px',
    margin: '20px',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  title: {
    fontSize: '20px',
    margin: '10px 0',
  },
  description: {
    color: '#555',
  },
  price: {
    color: '#e67e22',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#e67e22',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default FoodCard;
