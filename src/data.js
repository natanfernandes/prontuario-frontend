import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menusPacient: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/app/dashboard' },
    { text: 'Dados Médicos', icon: <Web/>, link: '/app/medicData' },
    { text: 'Consultas', icon: <GridOn/>, link: '/app/consults' },
    { text: 'Exames', icon: <GridOn/>, link: '/app/exams' },
    { text: 'Cirurgias', icon: <GridOn/>, link: '/app/surgeries' },
    { text: 'Internações', icon: <GridOn/>, link: '/app/internations' },
    { text: 'Sair', icon: <PermIdentity/>, link: '/' }
  ],
  menusMedic: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/app/dashboard' },
    { text: 'Consultas', icon: <GridOn/>, link: '/app/consults' },
    { text: 'Sair', icon: <PermIdentity/>, link: '/' }
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Consulta com Cardiologista', text: 'Hospital XXXXXX, Médico XXXX'},
      {id: 2, title: 'Consulta com Dermatologista', text: 'Clínica XXXXXX, Médico XXXX'},
      {id: 3, title: 'Consulta com Dentista', text: 'Clínica XXXXXX, Médico XXXX'},
    ],
    recentExams: [
      {id: 1, title: 'Eletrocardiograma', text: 'Hospital XXXXXX, Médico XXXX'},
      {id: 2, title: 'Ecocardiograma', text: 'Clínica XXXXXX, Médico XXXX'},
      {id: 3, title: 'Raspagem', text: 'Clínica XXXXXX, Médico XXXX'},
    ],
    recentPacients: [
      {id: 1, title: 'Nome1', text: 'dd/mm/yyyy hh:mm'},
      {id: 2, title: 'Nome2', text: 'dd/mm/yyyy hh:mm'},
      {id: 3, title: 'Nome3', text: 'dd/mm/yyyy hh:mm'},
    ],
    pacientsInHospital: [
      {id: 1, title: 'Nome1', text: 'dd/mm/yyyy hh:mm'},
      {id: 2, title: 'Nome2', text: 'dd/mm/yyyy hh:mm'},
      {id: 3, title: 'Nome3', text: 'dd/mm/yyyy hh:mm'},
      {id: 4, title: 'Nome4', text: 'dd/mm/yyyy hh:mm'},
      {id: 5, title: 'Nome5', text: 'dd/mm/yyyy hh:mm'},
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
