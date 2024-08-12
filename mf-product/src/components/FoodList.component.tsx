import React from 'react';
import { CSSProperties } from 'react';
import FoodCard from "../components/FoodCard.component";

const FoodList = () => {
  const foods = [
    {
      image: 'https://resizer.glanacion.com/resizer/v2/la-pizza-margarita-lleva-los-colores-de-la-M7NX62ONAJGRHMGZQKL3UMOIG4.jpeg?auth=95a4f0c18b4249f8a85c43e89ed95fc56dbfa22ac852945962285bb3c2638680&width=768&height=512&quality=70&smart=true',
      name: 'Pizza margarita',
      description: 'Pizza clásica italiana con mozzarella fresca y albahaca.',
      price: '12.99',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/220px-Sushi_platter.jpg',
      name: 'Plato de sushi',
      description: 'Surtido de sushi fresco con salsa de soja y wasabi.',
      price: '24.99',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VDjb2_W5UNG4TGrUWseWKhdN0pDw9aX0ppuGNe0Unv2B4Mlq-EFofN1a8wd_9hXccl0&usqp=CAU',
      name: 'Hamburguesa vegana',
      description: 'Deliciosa hamburguesa vegetal con lechuga y tomate.',
      price: '9.99',
    },
    {
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?quality=90&resize=440,400',
      name: 'Pasta Carbonara',
      description: 'Pasta cremosa con panceta, huevos y queso parmesano.',
      price: '14.99',
    },
  ];

  return (
    <div style={styles.container}>
      {foods.map((food, index) => (
        <FoodCard
          key={index}
          image={food.image}
          name={food.name}
          description={food.description}
          price={food.price}
        />
      ))}
    </div>
  );
};

const styles: { container: CSSProperties } = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
};

export default FoodList;