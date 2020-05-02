import styled from "styled-components/native";
import { FlatList } from "react-native";
import { lighten } from "polished";

interface ProductContainerProps {
  lenght: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View<ProductContainerProps>`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  padding: ${props => (props.lenght === 1 ? "0 13.5" : "0")}px;
  flex-direction: ${props => (props.lenght === 1 ? "row" : "column")};
`;

export const ProductList = styled(FlatList)`
  padding: 0 10px;
`;

export const Product = styled.View`
  background: ${lighten(0.05, "#3d3d4d")};
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px;
  flex: 1;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  height: 92px;
  width: 92px;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  width: 200px;
  color: #ebeef8;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ProductSinglePrice = styled.Text`
  font-size: 12px;
  color: #a0a0b3;
  margin-top: 8px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  margin-top: 5px;

  font-size: 16px;
  color: #e83f5b;
`;

export const ProductQuantity = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;

  font-size: 16px;
  color: #e83f5b;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(232, 63, 91, 0.3);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;

export const TotalProductsContainer = styled.View`
  position: absolute;
  bottom: 0px;

  flex-direction: row;
  background: #e83f5b;

  padding: 20px 40px;
  justify-content: space-between;
  align-items: center;
`;

export const TotalProductsText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 15px;

  flex: 1;
  font-weight: bold;
`;

export const SubtotalValue = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const EmptyCart = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
`;

export const EmptyCartText = styled.Text`
  font-size: 24px;
  margin-left: 16px;
  color: #ebeef8;
`;
