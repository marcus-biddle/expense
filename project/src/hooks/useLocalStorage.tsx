import { useState } from 'react';

const useLocalStorage = (key: any, initialValue: any[]) => {
    const item = window.localStorage.getItem(key);
    if (!item) {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
    }

    // Get initial value from local storage or use initialValue if not present
    const [storedValue, setStoredValue] = useState<any>(() => {
        try {
            const item: any = window.localStorage.getItem(key);
            return JSON.parse(item) as any[] || initialValue;
        } catch (error) {
            console.error('Error retrieving data from local storage:', error);
            return initialValue;
        }
    });

    // Update local storage and state when the value changes
    const setValue = (value: any) => {
        try {
            // Allow value to be a function to mimic useState
            const valueToStore: any[] = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error('Error saving data to local storage:', error);
        }
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
