import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameWithoutSpaces = user.name.trim();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let emailTest = emailRegex.test(user.email);
    if (emailTest && nameWithoutSpaces.length > 5) {
      setShow(true)
      setError(false);
    } else {
      setError(true)
      setShow(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre Completo</label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, surname: e.target.value })}
        />
        <button>Enviar</button>
      </form>

      {show ? (
        <p>´Gracias ${user.name} te contactaremos cuando antes vía mail´.</p>
      ) : null}

      {error && (
        <div>
          <p>Por favor verifique su información nuevamente.</p>
        </div>
      )}
    </div>
  );
};

export default Form;
