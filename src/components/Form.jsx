import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import '../stylesheets/Form.css';
import Loading from './Loading';
import Swal from 'sweetalert2';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    nombre === '' || email === ''
      ? Swal.fire('Por favor complete con sus datos los campos vacíos')
      : Swal.fire(`Bienvenido, ${nombre}`);

    setLoading(true);

    const order = {
      nombre,
      email,
    };

    const ordersCollection = collection(db, 'orden');

    addDoc(ordersCollection, order)
      .then(({ id }) => setOrderId(id))
      .catch((error) => {
        console.log('Error al enviar datos a Firebase: ', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">FORMULARIO</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Escribe tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>

        {loading ? (
          <Loading />
        ) : (
          <>
            <h1>Gracias por tu Compra ❤️ </h1>
            <h3 className="purchase-id">Id de tu compra: {orderId}</h3>
          </>
        )}
      </form>

      <button>
        <img
          className="mercado-pago-logo"
          src="/src/assets/icons8-mercado-pago-color-70.png"
          alt="Logo de MercadoPago"
        ></img>
      </button>
    </div>
  );
};

export default Form;