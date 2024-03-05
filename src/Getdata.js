import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import app from './Firebase';

const FetchDataFromFirebase = () => {
  const [products, setProducts] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'addproduct'));
        const fetchedProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    fetchData();
  }, [db]);

  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, 'addproduct', id));
      setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting data: ', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4">Products</h2>
      <div className="row">
        {products.map((post)=>{
          const {id,name,mail}=post;
          return(
            <div className="col-md-4" >
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">ID: {id}</p>
                <p className="card-text">Email: {mail}</p>
                <button className="btn btn-danger" onClick={() => deleteData(id)}>Delete</button>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default FetchDataFromFirebase;
