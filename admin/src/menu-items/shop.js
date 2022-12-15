// assets
import { ShopOutlined, SubnodeOutlined, BarChartOutlined, ReconciliationOutlined } from '@ant-design/icons';

// icons
const icons = {
    BarChartOutlined,
    ShopOutlined,
    SubnodeOutlined,
    ReconciliationOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'shops',
    title: 'Shops',
    type: 'group',
    children: [
        {
            id: 'product',
            title: 'Product',
            type: 'item',
            url: '/products',
            icon: icons.ShopOutlined
        },
        {
            id: 'category',
            title: 'Category',
            type: 'item',
            url: '/category',
            icon: icons.BarChartOutlined
        },
        {
            id: 'sub_category',
            title: 'Sub Category',
            type: 'item',
            url: '/sub-category',
            icon: icons.SubnodeOutlined
        },
        {
            id: 'manufactures',
            title: 'Manufactures',
            type: 'item',
            url: '/manufactures',
            icon: icons.ReconciliationOutlined
        }
    ]
};

export default pages;
