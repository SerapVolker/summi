import React, { useState } from 'react';
import styled from 'styled-components';
import Background from '../Photo/Bookingbg.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
 background-image: url(${Background}); 
 background-repeat: no repeat;
  padding: 20px;
`;
const BorderedText = styled(Link)`
  border: ${props => props.borderWidth || '2px'} solid ${props => props.borderColor || '#ffffff'};
  padding: ${props => props.padding || '1px 40px'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  display: inline-block;
   font-weight: 100;
  font-family: 'Cormorant Unicase', serif;
  color:  rgb(255, 255, 255);
  font-size: 65px;  
  margin-top: -700px;
  margin-right: 302px;
`
const FormCard = styled.div`
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 40px;
  max-width: 900px;
  width: 100%;
  margin-right: 50px;
  animation: fadeIn 0.5s ease-in;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-height: 90vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    margin-right: 20px;
    margin-left: 20px;
    padding: 30px;
    max-height: 85vh;
  }
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 10px;
  font-size: 28px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 30px;
  font-size: 14px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: white;
  font-weight: 500;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-size: 16px;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  option {
    background: rgba(0, 0, 0, 0.9);
    color: white;
  }

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-size: 16px;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const Button = styled.button`
  background: transparent;
  color: white;
  padding: 14px;
  border: 2px solid white;
  border-radius: 0px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;

  &:hover {
    background: white;
    color: #000000;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Message = styled.div`
  background: ${props => props.type === 'success' ? 'rgba(76, 175, 80, 0.95)' : 'rgba(244, 67, 54, 0.95)'};
  color: white;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  backdrop-filter: blur(5px);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DishSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const DishCategory = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h4`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(255, 0, 0, 0.5);
  display: inline-block;
`;

const DishOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;

  input {
    cursor: pointer;
    accent-color: #ffffff;
  }

  &:hover {
    color: #ffffff;
    transform: translateX(5px);
  }
`;

const DishPrice = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  margin-left: auto;
`;

const Booking= () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    dishes: [],
    cocktails: [],
    drinks: [],
    specialRequests: ''
  });

  const [message, setMessage] = useState(null);

  const menuData = {
    dishes: [
      { id: 'pasta', name: '🥩 стейк портерхаус', price: '1450₽' },
      { id: 'steak', name: '🐟 треска с грибным соусом', price: '1750₽' },
      { id: 'salad', name: '🦆 петто денатра', price: '2450₽' },
      { id: 'soup', name: '🍚 ризотто с тартаром из креветок и фисташек  ', price: '1350₽' },
      { id: 'risotto', name: '🥚 ньокки с рикоттой и соусом из базилика', price: '1980₽' },
    ],
      deserts: [
      { id: 'coke', name: '🍰 Брауни', price: '1170₽' },
      { id: 'sprite', name: '🍰 шоколадный торт с клубникой', price: '960₽' },
      { id: 'juice', name: '🍰 крем тирамису', price: '1080₽' },
      { id: 'water', name: '🍰 сорбет из шампанского', price: '750₽' },
      { id: 'tea', name: '🍰 парфе с соусом из лесных ягод', price: '920₽' },
    ],
    cocktails: [
      { id: 'mojito', name: '🍹 Сила Серафима', price: '1250₽' },
      { id: 'margarita', name: '🍸 Свобода', price: '950₽' },
      { id: 'pina_colada', name: '🍸 Ангел Смерти', price: '1750₽' },
      { id: 'negroni', name: '🍹 Экскалибур', price: '1650₽' },
    ],
    drinks: [
      { id: 'coke', name: '🥭 Свежий сок манго', price: '750₽' },
      { id: 'sprite', name: '🥝 Свежий сок киви', price: '750₽' },
      { id: 'juice', name: '🍒 Свежий сок черешни', price: '750₽' },
      { id: 'water', name: '🍌 Свежий сок банана', price: '750₽' },
    ]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleItemChange = (category, itemId) => {
    setFormData(prev => {
      const currentItems = prev[category];
      const newItems = currentItems.includes(itemId)
        ? currentItems.filter(id => id !== itemId)
        : [...currentItems, itemId];
      return { ...prev, [category]: newItems };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Валидация
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setMessage({ type: 'error', text: 'Пожалуйста, заполните все обязательные поля!' });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/\D/g, ''))) {
      setMessage({ type: 'error', text: 'Пожалуйста, введите корректный номер телефона!' });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    // Генерация случайного номера столика
    const tableNumber = Math.floor(Math.random() * 30) + 1;
    
    // Подсчет общего количества заказанных позиций
    const totalItems = formData.dishes.length + formData.cocktails.length + formData.drinks.length;
    
    console.log('Бронирование:', { ...formData, tableNumber, totalItems });
    
    // Показываем сообщение об успехе
    setMessage({ 
      type: 'success', 
      text: `✅ ${formData.name}, спасибо за бронирование! На ваш номер ${formData.phone} придёт SMS с номером столика #${tableNumber} и вашим именем регистрации.${totalItems > 0 ? ` Вы заказали ${totalItems} позиций из меню.` : ''}` 
    });
    
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <Container>
              <BorderedText  to="/">ВЫСШИЙ ВКУС</BorderedText>
      <FormCard>
        <Title> Бронирование столика</Title>
        <Subtitle>Забронируйте столик и сделайте предзаказ</Subtitle>
        
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>👤 Ваше имя *</Label>
            <Input
              type="text"
              name="name"
              placeholder="Иван Иванов"
              value={formData.name}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>📱 Номер телефона *</Label>
            <Input
              type="tel"
              name="phone"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>📅 Дата *</Label>
            <Input
              type="date"
              name="date"
              min={getTodayDate()}
              value={formData.date}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>⏰ Время *</Label>
            <Input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>👥 Количество гостей</Label>
            <Select name="guests" value={formData.guests} onChange={handleChange}>
              {[1,2,3,4,5,6,7,8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'гость' : 'гостей'}</option>
              ))}
            </Select>
          </InputGroup>

          <DishSection>
            <CategoryTitle> БЛЮДА</CategoryTitle>
            {menuData.dishes.map(dish => (
              <DishOption key={dish.id}>
                <input
                  type="checkbox"
                  checked={formData.dishes.includes(dish.id)}
                  onChange={() => handleItemChange('dishes', dish.id)}
                />
                <span>{dish.name}</span>
                <DishPrice>{dish.price}</DishPrice>
              </DishOption>
            ))}
            <CategoryTitle style={{ marginTop: '20px' }}> ДЕСЕРТЫ</CategoryTitle>
            {menuData.deserts.map(desert => (
              <DishOption key={desert.id}>
                <input
                  type="checkbox"
                  checked={formData.dishes.includes(desert.id)}
                  onChange={() => handleItemChange('dishes', desert.id)}
                />
                <span>{desert.name}</span>
                <DishPrice>{desert.price}</DishPrice>
              </DishOption>
            ))}
            <CategoryTitle style={{ marginTop: '20px' }}> КОКТЕЙЛИ</CategoryTitle>
            {menuData.cocktails.map(cocktail => (
              <DishOption key={cocktail.id}>
                <input
                  type="checkbox"
                  checked={formData.cocktails.includes(cocktail.id)}
                  onChange={() => handleItemChange('cocktails', cocktail.id)}
                />
                <span>{cocktail.name}</span>
                <DishPrice>{cocktail.price}</DishPrice>
              </DishOption>
            ))}

            <CategoryTitle style={{ marginTop: '20px' }}> НАПИТКИ</CategoryTitle>
            {menuData.drinks.map(drink => (
              <DishOption key={drink.id}>
                <input
                  type="checkbox"
                  checked={formData.drinks.includes(drink.id)}
                  onChange={() => handleItemChange('drinks', drink.id)}
                />
                <span>{drink.name}</span>
                <DishPrice>{drink.price}</DishPrice>
              </DishOption>
            ))}
          </DishSection>

          <InputGroup>
            <Label>📝 Особые пожелания</Label>
            <TextArea
              name="specialRequests"
              placeholder="Например: нужен столик у окна, аллергия на орехи и т.д."
              value={formData.specialRequests}
              onChange={handleChange}
            />
          </InputGroup>

          <Button type="submit">ЗАБРОНИРОВАТЬ СТОЛИК</Button>
        </Form>

        {message && (
          <Message type={message.type}>
            {message.text}
          </Message>
        )}
      </FormCard>

    </Container>
  );
};

export default Booking;