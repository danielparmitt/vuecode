import Home from './components/Home';
import Feature from './components/Feature';
import Query from './components/Query';
import Query1 from './components/Query1';


export const routes = [
    {path:'/',component:Home},
    {path:'/feature/:id',component:Feature},
    {path:'/query',component:Query,children:[
        {path:'/query/query1',component:Query1}
    ]}
];




