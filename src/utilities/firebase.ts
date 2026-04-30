import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCR_vAf2m8cGWB-kMqfR6b1H--XMK4F0Dw",
  authDomain: "scheduler-ed463.firebaseapp.com",
  databaseURL: "https://scheduler-ed463-default-rtdb.firebaseio.com",
  projectId: "scheduler-ed463",
  storageBucket: "scheduler-ed463.firebasestorage.app",
  messagingSenderId: "559297013393",
  appId: "1:559297013393:web:8ac98173dd6724224d0130",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function useDataQuery(path: string): [unknown, boolean, Error | undefined] {
  const [data, setData] = useState<unknown>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setData(undefined);
    setLoading(true);
    setError(undefined);

    return onValue(
      ref(database, path),
      (snapshot) => {
        setData(snapshot.val());
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );
  }, [path]);

  return [data, loading, error];
}

export function updateData(path: string, value: object) {
  return update(ref(database, path), value);
}