import { createBrowserRouter, Navigate } from 'react-router-dom'
import AddAndEdit from './componenents/addAndEdit'
import App from './app';
import ColorProvider from './context/colorContext';

import axios from 'axios'
import { useContext, type ReactNode } from 'react';

const RouteRoles = ({ roles, children }: { roles: string[], children: ReactNode }) => {
    const { user } = useContext(userContext)

    if (!user)
        return <Navigate to="login" />
    if (!roles.includes(user.role))
        return <Navigate to="notaloowed" />


    return <>{children}</>

}


const routes = createBrowserRouter([
    {
        path: "",
        element: <ColorProvider> <App /></ColorProvider>,
        children: [

            { path: "abcd" },


            {
                path: "/editBook",
                element:  <RouteRoles roles={["admin"]}> <AddAndEdit /></RouteRoles>,
                loader: async (id) => {
                    const data = await axios.get(`http://mydomain.com/book/${id}`)
                    return data.data
                },
                action: async (s) => {

                }
            }, {
                path: "/addBook",
                element: <RouteRoles roles={["admin","user"]}><AddAndEdit /></RouteRoles>,
                loader: async (id) => {
                    return {
                        name: "",
                        adDate: new Date()
                    }
                },
                action: async (s) => {
                    const data = await axios.post(`http://mydomain.com/book`, s)
                    return data.data
                }
            }]
    }])


export default routes;