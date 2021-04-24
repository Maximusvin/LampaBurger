import { useState, useEffect } from 'react';

export const useDatabase = db => {
  const [database, setDb] = useState(null);

  useEffect(() => {
    db.ref('goods').on('value', snapshot => {
      setDb(snapshot.val());
    });
  }, [db]);

  return database;
};
