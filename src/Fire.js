import React, { useState } from 'react';
import firebase from './Firebase';
import { addDoc, collection, getFirestore,setDoc,doc } from 'firebase/firestore';
import app from './Firebase';

const Fire = () => {
  const [name, setName] = useState('');
  const [id, setid] = useState('');
  const [mail, setMail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const database = getFirestore(app);
    try {
      const docRef = await setDoc(doc(collection(database, 'addproduct'), id), {
        name,
        id,
        mail
    });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Add Product</h2>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            name="id"
            placeholder="id"
            value={id}
            onChange={(e) => setid(e.target.value)}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md transition duration-300 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Fire;
