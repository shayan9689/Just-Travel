import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bookingData, setBookingData] = useState({
    packageId: null,
    travelers: [],
    paymentMethod: null,
    totalPrice: 0,
  });

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const updateBooking = (data) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  return (
    <AppContext.Provider value={{ user, bookingData, login, logout, updateBooking }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
