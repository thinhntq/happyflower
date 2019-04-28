const order = [
    {
        id: "#1mckzj2",
        address: "Số 2 Nguyễn Xí, Phường 2, Quận Bình Thạnh, TPHCM",
        note: "Giao hàng trước 9h",
        attribute: "Thiệp hình vuông",
        createdAt: new Date().toLocaleDateString()
    },
    {
        id: "#321kas2",
        address: "Số 2 Nguyễn Xí, Phường 2, Quận Bình Thạnh, TPHCM",
        note: "Giao hàng trước 9h",
        attribute: "Thiệp hình vuông",
        createdAt: new Date().toLocaleDateString()
    },
    {
        id: "#1iu3zj2",
        address: "Số 2 Nguyễn Xí, Phường 2, Quận Bình Thạnh, TPHCM",
        note: "Giao hàng trước 9h",
        attribute: "Thiệp hình vuông",
        createdAt: new Date().toLocaleDateString()
    },
    {
        id: "#as3ckzj2",
        address: "Số 2 Cách mạng tháng 8, Quận 3, TPHCM",
        note: "Giao hàng trước 9h",
        attribute: "Thiệp hình vuông",
        createdAt: new Date().toLocaleDateString()
    },
    {
        id: "#1loizj2",
        address: "57/452/2 Trường Chinh, Quận Tân Bình, TPHCM",
        note: "Giao hàng trước 9h",
        attribute: "Thiệp hình vuông",
        createdAt: new Date().toLocaleDateString()
    },
    {
        id: "#1mck09p",
        address: "Số 13 Hồng Hà, Tân Bình TPHCM",
        note: "Giao hàng trước 9h",
        attribute: "Thiệp hình vuông",
        createdAt: new Date().toLocaleDateString()
    },
    {
        id: "#1mc32f2",
        address: "Số 2 Nguyễn Xí, Phường 2, Quận Bình Thạnh, TPHCM",
        note: "Giao hàng trước 9h",
        attribute: "Thiệp hình vuông",
        createdAt: new Date().toLocaleDateString()
    },
];

const getOrder = (limit) => {
    return (limit) ? order.slice(0, limit) : order;
};

export {
    order,
    getOrder
};
