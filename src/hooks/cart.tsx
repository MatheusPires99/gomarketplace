import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedProducts = await AsyncStorage.getItem(
        "@GoMarketplace:products",
      );

      if (storagedProducts) {
        setProducts([...JSON.parse(storagedProducts)]);
      }
    }

    loadProducts();
  }, []);

  // AsyncStorage.clear();

  const increment = useCallback(
    async id => {
      const newProduct = products.findIndex(product => product.id === id);

      if (newProduct >= 0) {
        const updatedProducts = [...products];

        updatedProducts[newProduct].quantity += 1;

        setProducts(updatedProducts);
      }

      await AsyncStorage.setItem(
        "@GoMarketplace:products",
        JSON.stringify(products),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const newProduct = products.findIndex(product => product.id === id);

      if (newProduct >= 0) {
        if (products[newProduct].quantity <= 1) {
          const filterProducts = products.filter(product => product.id !== id);

          setProducts(filterProducts);
        } else {
          const updatedProducts = [...products];

          updatedProducts[newProduct].quantity -= 1;

          setProducts(updatedProducts);
        }
      }

      await AsyncStorage.setItem(
        "@GoMarketplace:products",
        JSON.stringify(products),
      );
    },
    [products],
  );

  const addToCart = useCallback(
    async product => {
      const productExists = products.find(p => p.id === product.id);

      if (productExists) {
        increment(productExists.id);
      } else {
        const productToAdd = {
          ...product,
          quantity: 1,
        };

        setProducts(state => [...state, productToAdd]);

        await AsyncStorage.setItem(
          "@GoMarketplace:products",
          JSON.stringify([...products, productToAdd]),
        );
      }
    },
    [products, increment],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
