const enums = () => {
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }

    console.log(Direction)          // 出力: {1: 'Up', 2: 'Down', 3: 'Left', 4: 'Right', Up: 1, Down: 2, Left: 3, Right: 4}
    console.log(Direction.Up);      // 出力: 1
    console.log(Direction.Down);    // 出力: 2
    console.log(Direction.Left);    // 出力: 3
    console.log(Direction.Right);   // 出力: 4

    enum OrderStatus {
        Pending = "Pending",
        Shipped = "Shipped",
        Delivered = "Delivered",
        Canceled = "Canceled"
    }
    
    let orderStatus: OrderStatus = OrderStatus.Pending;

    console.log(orderStatus)
    //orderStatus = "Stop";   //enumで型安全を確保    エラー: 型 '"Stop"' を型 'OrderStatus' に割り当てることはできません。
}

export default enums