import { useState, useEffect } from 'react';

export const useDatabase = db => {
  const [database, setDb] = useState(null);

  useEffect(() => {
    const dbRef = db.ref('goods');
    dbRef.on('value', snapshot => {
      setDb(snapshot.val());
    });
  }, [db]);

  return database;
};
