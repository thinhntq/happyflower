const Items =  [
    {
      'uuid': '3782c174-1f2c-4dc4-b75d-0bedf400e023',
      'nameCustomer': 'Nguyễn Trần Quốc Thịnh',
      'addressCustomer': 'Ấp xóm mới, Xã Trung Lập Hạ, Huyện Củ Chi, TP.HCM',
      'phoneCustomer': '0369 275 275',
      'productId': 113,
      'productName': 'Hoa hồng Kitkat',
      'createdAt' : '11:00',
      'timeShip': '13:30',
      'dateShip': '25-5-2019',
      'status': 'Đang thực hiện'
    },

  ];
  
  const getOrderById = (uuid) => {
    return (uuid === undefined) ? Items[0] : Items.find(x => x.uuid === uuid);
  };
  
  const getOrder = (limit) => {
    return (limit) ? Items.slice(0, limit) : Items;
  };
  
  export {
    Items,
    getOrder,
    getOrderById
  };
  