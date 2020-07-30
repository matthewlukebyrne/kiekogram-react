import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
    .orderBy('createdAt', 'desc')

    .onSnapshot((snap) => {  // everytime there is a change in the images
      let documents = []; // have a empty a array and then cycle through using for each!
      snap.forEach(doc => {
        documents.push({...doc.data(), id: doc.id }) // SPREAD 
      });

      setDocs(documents);
    })


    return () => unsub();
  }, [collection])

  return { docs };
}

export default useFirestore;