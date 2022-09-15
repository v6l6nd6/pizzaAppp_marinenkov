export type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    label: number;
  };

export const calcTotalPrice = (item: any)=>{
    return  item.reduce((sum:any, obj:any) => (obj.price * obj.label + sum), 0).toFixed(2);
}